export async function createRequest(url, method = 'GET', body = null) {
  const response = await fetch(`http://localhost:1337${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const error = await response.json();
    console.log(error)
    throw new Error(error.message || 'An error occurred');
  }

  return response.json();
}
