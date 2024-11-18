import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qaexakalixpehrmskqry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhZXhha2FsaXhwZWhybXNrcXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Njg5NDgsImV4cCI6MjA0NzQ0NDk0OH0.MYFrWZuTcqkzH5cifw-uVGXtxuMxLCQCuBxfzDuzP94";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
