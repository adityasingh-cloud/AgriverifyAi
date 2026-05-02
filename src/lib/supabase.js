import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ihhslxszpgsvqvjfoefj.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key Present:", !!supabaseAnonKey);

if (!supabaseAnonKey) {
  console.warn("Supabase Anon Key is missing! Falling back to placeholder.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey || 'your-anon-key-here')
