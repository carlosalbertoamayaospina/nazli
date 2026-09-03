// Configuración pública de Supabase para Valios / Cosméticos Multimarca.
// SOLO usa aquí la URL del proyecto y la clave pública (publishable/anon).
// NUNCA pongas la service_role key en un archivo que se publique.
window.SUPABASE_URL = 'https://xahedodwlekcjogriwue.supabase.co';
window.SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_2NakMYk1zr-Fs8mrur_0ag_qkP8VblE';

window.supabaseClient =
  (window.supabase && window.SUPABASE_URL.startsWith('http') &&
   !window.SUPABASE_URL.includes('PEGA_AQUI') &&
   window.SUPABASE_PUBLISHABLE_KEY &&
   !window.SUPABASE_PUBLISHABLE_KEY.includes('PEGA_AQUI'))
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY)
  : null;
