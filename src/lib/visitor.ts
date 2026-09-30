/**
 * Visitor Tracking Utility
 * ──────────────────────────────────────────────────────────────────────────
 * Collects anonymous visitor metadata and upserts it via the Supabase
 * `record_visitor_event` RPC (SECURITY DEFINER function).
 *
 * Flow:
 *  1. On consent, generate / retrieve a persistent `visitor_id` (localStorage)
 *  2. Generate a per-tab `session_id` (sessionStorage)
 *  3. Collect device metadata (UA, screen size, timezone, language)
 *  4. Call supabase.rpc('record_visitor_event', {...})
 *  5. Subsequent visits increment `visit_count` via the ON CONFLICT upsert
 */

import { supabase, isSupabaseConfigured } from '@/lib/supabase';

// ── ID helpers ────────────────────────────────────────────────────────────

const VISITOR_KEY = 'atl_visitor_id';
const SESSION_KEY = 'atl_session_id';
const CONSENT_KEY = 'atl_tracking_consent';

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = generateId();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return generateId(); // private browsing may block localStorage
  }
}

export function getOrCreateSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = generateId();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return generateId();
  }
}

// ── Consent helpers ───────────────────────────────────────────────────────

export function hasConsented(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'true';
  } catch {
    return false;
  }
}

export function saveConsent(): Date {
  const now = new Date();
  try {
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(`${CONSENT_KEY}_at`, now.toISOString());
  } catch {
    // ignore
  }
  return now;
}

export function getConsentedAt(): Date | null {
  try {
    const iso = localStorage.getItem(`${CONSENT_KEY}_at`);
    return iso ? new Date(iso) : null;
  } catch {
    return null;
  }
}

export function declineConsent(): void {
  try {
    localStorage.setItem(CONSENT_KEY, 'false');
  } catch {
    // ignore
  }
}

export function hasDeclined(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'false';
  } catch {
    return false;
  }
}

// ── Device helpers ────────────────────────────────────────────────────────

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

// ── Main tracking call ────────────────────────────────────────────────────

interface TrackPayload {
  consentedAt: Date;
}

export async function recordVisit({ consentedAt }: TrackPayload): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    console.info('[Visitor] Supabase not configured — skipping tracking.');
    return;
  }

  const visitorId = getOrCreateVisitorId();
  const sessionId = getOrCreateSessionId();

  const payload = {
    p_visitor_id:    visitorId,
    p_session_id:    sessionId,
    p_path:          window.location.pathname,
    p_referrer:      document.referrer || null,
    p_user_agent:    navigator.userAgent,
    p_device_type:   getDeviceType(),
    p_screen_width:  window.screen.width,
    p_screen_height: window.screen.height,
    p_timezone:      Intl.DateTimeFormat().resolvedOptions().timeZone,
    p_language:      navigator.language,
    p_consented_at:  consentedAt.toISOString(),
  };

  try {
    const { error } = await supabase.rpc('record_visitor_event', payload);
    if (error) {
      console.warn('[Visitor] RPC error:', error.message);
    } else {
      console.info('[Visitor] Event recorded for visitor:', visitorId.slice(0, 8) + '…');
    }
  } catch (err) {
    console.warn('[Visitor] Network error:', err);
  }
}
