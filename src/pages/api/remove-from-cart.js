import { strapiFetch } from '../../lib/strapiFetch';

export async function post({ request }) {
  const body = await request.json();
  const { userId, productId } = body;

  // Fetch user with cart populated
  const userResponse = await strapiFetch(`/users/${userId}?populate=cart`, {
    headers: {
      Authorization: `Bearer ${request.headers.get('Authorization')}`,
    },
  });

  // Remove product from the cart
  const updatedCart = userResponse.cart.filter(item => item.id !== productId);

  // Update user's cart in Strapi
  const response = await strapiFetch(`/users/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${request.headers.get('Authorization')}`,
    },
    body: JSON.stringify({ cart: updatedCart }),
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
