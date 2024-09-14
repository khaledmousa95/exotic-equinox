import { strapiFetch } from '../../lib/strapiFetch';

export async function get() {
  const response = await strapiFetch('/products');

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
