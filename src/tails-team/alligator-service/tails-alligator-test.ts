import { SetupPayloadModel } from '../../models/setup-payload.model';
import { tailsSetup } from '../setup';
import { testAlligatorService } from '.';
import { defaultOptions } from '../options';

export const options = {
  ...defaultOptions,
};

export function setup(): SetupPayloadModel {
  return tailsSetup();
}

export default (payload: SetupPayloadModel) => {
  testAlligatorService(payload);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
