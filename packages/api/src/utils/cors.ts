export const headers = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin',
  'Access-Control-Allow-Credentials': 'true',
});

export const corsResponse = (origin: string) => {
  const response = new Response();
  Object.entries(headers(origin)).map(([k, v]) => response.headers.set(k, v));
  return response;
};
