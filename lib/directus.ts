const DIRECTUS_URL = process.env.DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

type DirectusResponse<T> = {
  data: T;
};

export async function directusFetch<T>(path: string): Promise<T> {
  if (!DIRECTUS_URL) {
    throw new Error('DIRECTUS_URL is not configured');
  }

  const url = `${DIRECTUS_URL.replace(/\/$/, '')}${path}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (DIRECTUS_TOKEN) {
    headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Directus request failed (${response.status})`);
  }

  const payload = (await response.json()) as DirectusResponse<T>;
  return payload.data;
}
