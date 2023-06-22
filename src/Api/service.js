import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://thqdzdzskcngvnpighqt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocWR6ZHpza2NuZ3ZucGlnaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzE4ODUsImV4cCI6MjAwMzAwNzg4NX0.QK5-ixnZ2v24X-EM8_1BuXAxKBe9uEmU2zuzdhmC8Ss";
const supabaseApiService = createClient(supabaseUrl, supabaseKey);

export default supabaseApiService;
