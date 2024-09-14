import { strapiFetch } from '../../../lib/strapiFetch';

export async function get({ params }) {
  const { id } = params;
  const response = await strapiFetch(`/products/${id}`);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
