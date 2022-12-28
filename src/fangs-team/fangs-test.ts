import { SetupPayloadModel } from '../models/setup-payload.model';

import { fangsOptions } from './options';
import { fangsSetup } from './setup';

import { testAlligatorService } from './alligator-service';
import { testCaimanService } from './caiman-service';
import { auth } from './caiman-service/config';
import { signIn } from '../shared-services/identity-service/http/auth';

export const options = {
  ...fangsOptions,
};

export function setup() {
  return {
    meConfig: fangsSetup(signIn(auth)),
    common: fangsSetup(),
  };
}

export default ({ common, me }): void => {
  testAlligatorService(common);
  testCaimanService(me);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
