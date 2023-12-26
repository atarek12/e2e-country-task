const BaseURL = "http://localhost:4000";

export async function fetchApi<T>(
  path: string,
  init?: RequestInit | undefined,
): Promise<T> {
  const res = await fetch(`${BaseURL}${path}`, init);
  return res.json() as T;
}
