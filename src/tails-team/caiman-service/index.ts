import { SetupPayloadModel } from '../../models/setup-payload.model';
import { checkResponse } from '../../utils/check-response';
import { getCaimans, getACaiman } from './http';
import {parseBody} from '../../utils/helpers';
import exec from 'k6/execution';

export const testCaimanService = (payload: SetupPayloadModel) => {
  const { serviceCaimanBaseUrl: baseUrl, headers, params } = payload;

  const myCaimans = getCaimans(baseUrl, params.cursor, params.offset, params.limit, headers);
  checkResponse(myCaimans, 'Test list caimans');

  const myCaimansCollection = parseBody(myCaimans);
  if (!myCaimansCollection.length) exec.test.abort('Tails: Caimans collection is empty for the user');

  const caimanId = myCaimansCollection[0].id;
  checkResponse(getACaiman(baseUrl, caimanId, headers), `Check caiman ${caimanId}`);
};
