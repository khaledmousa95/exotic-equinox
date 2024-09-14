import { strapiFetch } from '../../lib/strapiFetch';

export async function get({ request }) {
  const userId = request.headers.get('userId'); // Assumes user ID is sent in the request
  const response = await strapiFetch(`/users/${userId}?populate=cart`, {
    headers: {
      Authorization: `Bearer ${request.headers.get('Authorization')}`,  // Use a token from login
    },
  });

  return new Response(JSON.stringify(response.cart), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
