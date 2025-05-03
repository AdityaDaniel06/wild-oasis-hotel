import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yoxevzgbawmklefzbobp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveGV2emdiYXdta2xlZnpib2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTc0MjksImV4cCI6MjA1OTY3MzQyOX0.KP59oIKHctyFf30M7XSBwbY_oExVH992d-gA5mu6SdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
