import http from 'k6/http';
import { Headers } from '../../models/headers.type';
import { TextResponse } from '../../models/text-response.type';

export const getMyCaimans = (baseUrl: string, headers: Headers): TextResponse => {
  const url = `${baseUrl}/my/crocodiles/`;
  return http.get(url, { headers });
};
