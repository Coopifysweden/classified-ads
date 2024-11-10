import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uqycbzxfzvmkdogrgnpk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxeWNienhmenZta2RvZ3JnbnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODE3NDksImV4cCI6MjA0Njc1Nzc0OX0.zyob-uHgwbUlvTx49S94Oe-PzUvKo5ClKpx_N9xDPUg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

