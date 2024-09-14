import { strapiFetch } from '../../lib/strapiFetch';

export async function post({ request }) {
  const body = await request.json();
  
  const response = await strapiFetch('/auth/local', {
    method: 'POST',
    body: JSON.stringify({
      identifier: body.identifier, // Can be either email or username
      password: body.password,
    }),
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
