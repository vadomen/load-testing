import http from 'k6/http';
import { Headers } from '../../../models/headers.type';
import { TextResponse } from '../../../models/text-response.type';
import { SignInModel } from '../models/sign-in.model';
import { getHeaders } from '../../../utils/get-headers';
import { baseUrl } from '../config';

export const getToken = (host: string, signInData: SignInModel, headers: Headers): TextResponse => {
  const url = `${host}/auth/token/login/`;
  const body = JSON.stringify({
    username: signInData.login,
    password: signInData.password,
  });

  return http.post(url, body, { headers });
};

export const signIn = (auth, host = baseUrl) => {
  const signInData: SignInModel = { ...auth };

  const res: any = getToken(host, signInData, getHeaders());

  return res.json('access');
};

