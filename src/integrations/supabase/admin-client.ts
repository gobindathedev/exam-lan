// This file contains the admin client with service_role privileges.
// IMPORTANT: Only use this client in server-side code or secure environments.
// Never expose this key to the client-side.

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mquvqeprxucgwgkztfpi.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xdXZxZXByeHVjZ3dna3p0ZnBpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTIxMzkyMiwiZXhwIjoyMDY0Nzg5OTIyfQ.zU9BUi3yR7xkygYmA-C2q8ZZEzEuU6uNpzkSJu5ISXU";

// Import the admin supabase client like this:
// import { adminSupabase } from "@/integrations/supabase/admin-client";
// IMPORTANT: Only use in secure server-side environments!

export const adminSupabase = createClient<Database>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY); 