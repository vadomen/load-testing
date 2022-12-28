import { Headers } from '../models/headers.type';

export const getHeaders = (accessToken?: string): Headers => (accessToken
  ? {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }
  : { 'Content-Type': 'application/json' });
