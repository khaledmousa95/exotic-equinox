import { strapiFetch } from '../../lib/strapiFetch';

export async function post({ request }) {
  const body = await request.json();
  
  const response = await strapiFetch('/auth/local/register', {
    method: 'POST',
    body: JSON.stringify({
      username: body.username,
      email: body.email,
      password: body.password,
    }),
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
}
