import { SetupPayloadModel } from '../../models/setup-payload.model';
import { fangsSetup } from '../setup';
import { testCaimanService } from '.';
import { fangsOptions } from '../options';

import { signIn } from '../../shared-services/identity-service/http/auth';
import { auth } from './config';

export const options = {
  ...fangsOptions,
};

export function setup(): SetupPayloadModel {
  return fangsSetup(signIn(auth));
}

export default (payload: SetupPayloadModel) => {
  testCaimanService(payload);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
