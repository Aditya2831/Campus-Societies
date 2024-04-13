
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fcbyrfhpsxveworvwzep.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYnlyZmhwc3h2ZXdvcnZ3emVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjE0NTYsImV4cCI6MjAyNTkzNzQ1Nn0.vkxkszcZ8RJYz91qhIJ8oFi6W6gzhNDbCwp_t_S4Qbc'
export const supabase = createClient(supabaseUrl, supabaseKey)