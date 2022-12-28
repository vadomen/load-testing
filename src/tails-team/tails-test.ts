import { SetupPayloadModel } from '../models/setup-payload.model';

import { defaultOptions } from './options';
import { tailsSetup } from './setup';

import { testAlligatorService } from './alligator-service';
import { testCaimanService } from './caiman-service';

export const options = {
  ...defaultOptions,
};

export function setup() {
  return {
    common: tailsSetup(),
  };
}

export default ({ common }): void => {
  testAlligatorService(common);
  testCaimanService(common);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
