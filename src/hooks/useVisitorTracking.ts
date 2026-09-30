import { useState, useEffect, useCallback } from 'react';
import {
  hasConsented,
  hasDeclined,
  saveConsent,
  declineConsent,
  getConsentedAt,
  recordVisit,
} from '@/lib/visitor';

interface UseVisitorTrackingReturn {
  /** Whether the consent banner should be shown */
  showBanner: boolean;
  /** Call when user clicks "Accept" */
  onAccept: () => void;
  /** Call when user clicks "Decline" */
  onDecline: () => void;
}

export function useVisitorTracking(): UseVisitorTrackingReturn {
  const [showBanner, setShowBanner] = useState(false);

  // On mount: if already consented, fire tracking silently.
  // If not decided yet, show the banner.
  useEffect(() => {
    if (hasConsented()) {
      // Returning visitor — re-record (increments visit_count via upsert)
      const consentedAt = getConsentedAt() ?? new Date();
      recordVisit({ consentedAt });
    } else if (!hasDeclined()) {
      // First visit with no decision → show consent banner
      // Small delay so the banner doesn't flash before the page renders
      const t = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const onAccept = useCallback(() => {
    const consentedAt = saveConsent();
    setShowBanner(false);
    recordVisit({ consentedAt });
  }, []);

  const onDecline = useCallback(() => {
    declineConsent();
    setShowBanner(false);
  }, []);

  return { showBanner, onAccept, onDecline };
}
