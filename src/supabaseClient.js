import { createClient } from '@supabase/supabase-js'

// Ye dono cheezein Supabase Dashboard -> Settings -> API se milengi
const supabaseUrl = 'https://upguvbcdmdmqogmgimvi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZ3V2YmNkbWRtcW9nbWdpbXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1NDM4NTIsImV4cCI6MjA4MzExOTg1Mn0.0Uqg7x9Zz0IiPxMt_8EVKcmimo7jLTgRQ3ZWJ5EmE90'

export const supabase = createClient(supabaseUrl, supabaseKey)