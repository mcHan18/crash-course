import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cltpyheovngkuaiitkpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdHB5aGVvdm5na3VhaWl0a3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1ODQzNDYsImV4cCI6MjAwNTE2MDM0Nn0.pXPvPvXDiLk98WQOs8nQn1zw_couwzWA2uRrlw38WUQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
