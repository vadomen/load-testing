import { SetupPayloadModel } from '../../models/setup-payload.model';
import { tailsSetup } from '../setup';
import { testCaimanService } from '.';
import { defaultOptions } from '../options';

export const options = {
  ...defaultOptions,
};

export function setup(): SetupPayloadModel {
  return tailsSetup();
}

export default (payload: SetupPayloadModel) => {
  testCaimanService(payload);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
