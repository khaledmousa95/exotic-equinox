export const strapiFetch = async (endpoint, options = {}) => {
    const baseUrl = 'http://localhost:1337';  // Replace with your Strapi URL
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  
    const data = await response.json();
    return data;
  };
  