import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://brxwlusifewujzwvgvcb.supabase.co";

export const cabinImagePrefix = "storage/v1/object/public/cabin-images";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeHdsdXNpZmV3dWp6d3ZndmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMjIwMjQsImV4cCI6MjAwODc5ODAyNH0.7PbdB5bDCGDpTliNJAz2QiMMhG8JdQyVHwNam2AUzcE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
