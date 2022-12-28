import http from 'k6/http';
import { Headers } from '../../models/headers.type';
import { TextResponse } from '../../models/text-response.type';

export const getCaimans = (baseUrl: string, cursor: string, offset: string, limit: string, headers: Headers):
  TextResponse => {
  const url = `${baseUrl}/my/crocodiles?cursor=${cursor}&offset=${offset}&limit=${limit}`;
  return http.get(url, { headers });
};

export const getACaiman = (baseUrl: string, id, headers: Headers):
  TextResponse => {
  const url = `${baseUrl}/my/crocodiles/${id}`;
  return http.get(url, { headers });
};
