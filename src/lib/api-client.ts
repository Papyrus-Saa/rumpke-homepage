export enum API_ENDPOINTS {
  PROPERTIES = '/properties',
  PROPERTY_DETAILS = '/property',
}

export function getApiUrl(endpoint: API_ENDPOINTS): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  return `${baseUrl}${endpoint}`;
}
