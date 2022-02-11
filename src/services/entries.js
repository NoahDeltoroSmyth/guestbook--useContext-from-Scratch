import { checkError, client } from './client';

export async function fetchEntries() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/guestEntry`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function addEntry(name, entry) {
  const resp = await client.from('guestEntry').insert([{ name, entry }]);
  return checkError(resp);
}
