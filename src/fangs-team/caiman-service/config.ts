import { hosts, auth as commonAuth, requestParams } from '../config';

const auth = {
  ...commonAuth,
  login: commonAuth.caimanLogin || '',
  password: commonAuth.caimanPassword || '',
};

export {
  hosts,
  requestParams,
  auth,
};
