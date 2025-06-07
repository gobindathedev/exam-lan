// Script to apply migrations to Supabase
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get Supabase credentials from environment variables or config
const SUPABASE_URL = "https://mquvqeprxucgwgkztfpi.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xdXZxZXByeHVjZ3dna3p0ZnBpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTIxMzkyMiwiZXhwIjoyMDY0Nzg5OTIyfQ.zU9BUi3yR7xkygYmA-C2q8ZZEzEuU6uNpzkSJu5ISXU";

// Create Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Function to read and execute SQL files
async function applyMigration(filePath) {
  try {
    console.log(`Applying migration: ${filePath}`);
    const sql = fs.readFileSync(filePath, 'utf8');
    const { data, error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error(`Error applying migration ${filePath}:`, error);
    } else {
      console.log(`Successfully applied migration: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error reading or executing migration ${filePath}:`, err);
  }
}

// Main function to apply all migrations
async function applyMigrations() {
  const migrationsDir = path.join(__dirname, 'migrations');
  
  try {
    // Read all SQL files in the migrations directory
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort(); // Apply migrations in alphabetical order
    
    // Apply each migration
    for (const file of files) {
      await applyMigration(path.join(migrationsDir, file));
    }
    
    console.log('All migrations applied successfully');
  } catch (err) {
    console.error('Error applying migrations:', err);
  }
}

// Run the migrations
applyMigrations(); 