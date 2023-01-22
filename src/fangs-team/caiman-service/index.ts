import { SetupPayloadModel } from '../../models/setup-payload.model';
import { checkResponse } from '../../utils/check-response';
import { getMyCaimans } from './http';

export const testCaimanService = (payload: SetupPayloadModel) => {
  const { serviceCaimanBaseUrl, headers } = payload;
  checkResponse(getMyCaimans(serviceCaimanBaseUrl, headers), 'Test caiman service');
};
