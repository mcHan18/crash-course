import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cltpyheovngkuaiitkpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdHB5aGVvdm5na3VhaWl0a3ByIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTU4NDM0NiwiZXhwIjoyMDA1MTYwMzQ2fQ.wu4UNFKkoFtHWT9QfpbEOWrcUI-JJfu2UvM-X7bmZmg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
