import { SetupPayloadModel } from '../../models/setup-payload.model';
import { fangsSetup } from '../setup';
import { testAlligatorService } from '.';
import { fangsOptions } from '../options';

export const options = {
  ...fangsOptions,
};

export function setup(): SetupPayloadModel {
  return fangsSetup();
}

export default (payload: SetupPayloadModel) => {
  testAlligatorService(payload);
};

export function teardown(payload: SetupPayloadModel): void {
  console.log(JSON.stringify(payload));
}
