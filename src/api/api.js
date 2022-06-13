import { createClient } from '@supabase/supabase-js';

const url = process.env.REACT_APP_URL;
const apikey = process.env.REACT_APP_API_KEY;
const authorizationKey = process.env.REACT_APP_AUTH_KEY;

export const supabase = createClient(
  url,
  apikey,
  {
    headers: {
      Authorization: `Bearer ${authorizationKey}`,
    },
  },
);
