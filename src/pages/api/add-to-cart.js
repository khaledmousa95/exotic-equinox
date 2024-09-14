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

  const cart = userResponse.cart;
  cart.push(productId);  // Add the product to the cart

  // Update the user's cart
  const response = await strapiFetch(`/users/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${request.headers.get('Authorization')}`,
    },
    body: JSON.stringify({ cart }),
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
