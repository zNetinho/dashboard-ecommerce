import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://vrvfyjcxwxdmosrnwxst.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydmZ5amN4d3hkbW9zcm53eHN0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzc3MTMzNiwiZXhwIjoyMDE5MzQ3MzM2fQ.cWawToNa8BnciAa56L4N49nkfeCSzDZZZMSPGCFWD2I"
);