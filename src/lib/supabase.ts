import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url?: string) => {
  if (!url || typeof url !== 'string') return false;
  return url.startsWith('http://') || url.startsWith('https://');
};

export const isSupabaseConfigured = Boolean(
  isValidUrl(supabaseUrl) && supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY'
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

