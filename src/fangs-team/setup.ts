import { signIn } from '../shared-services/identity-service/http/auth';
import { SetupPayloadModel } from '../models/setup-payload.model';
import { getHeaders } from '../utils/get-headers';
import { hosts, auth, requestParams } from './config';

const { serviceAlligatorBaseUrl, serviceCaimanBaseUrl } = hosts;

export const fangsSetup = (accessToken = signIn(auth)): SetupPayloadModel => ({
  serviceAlligatorBaseUrl,
  serviceCaimanBaseUrl,
  headers: getHeaders(accessToken),
  params: {
    ...requestParams,
  },
});
