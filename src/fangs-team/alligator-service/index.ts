import { SetupPayloadModel } from '../../models/setup-payload.model';
import { checkResponse } from '../../utils/check-response';
import { getAlligators, getAnAlligator } from './http';
import {parseBody} from '../../utils/helpers';
import exec from 'k6/execution';

export const testAlligatorService = (payload: SetupPayloadModel) => {
  const { serviceAlligatorBaseUrl, headers, params } = payload;
  const myAlligators = getAlligators(serviceAlligatorBaseUrl, params.cursor, params.offset, params.limit, headers);
  checkResponse(myAlligators, 'Fangs Team:Test list alligators');

  const myAlligatorsCollection = parseBody(myAlligators);
  if (!myAlligatorsCollection.length) exec.test.abort('Fangs Team:: Alligators collection is empty for the user');

  const alligatorId = myAlligatorsCollection[0].id;
  checkResponse(getAnAlligator(serviceAlligatorBaseUrl, alligatorId, headers), `Fangs Team: Check alligator ${alligatorId}`);
};
