export const hosts = {
  serviceAlligatorBaseUrl: process.env.TAILS_TEAM_ALLIGATOR_HOST || '',
  serviceCaimanBaseUrl: process.env.TAILS_TEAM_CAIMAN_HOST || '',
};

export const auth = {
  login: process.env.TAILS_TEAM_SUPERUSER_LOGIN || '',
  password: process.env.TAILS_TEAM_SUPERUSER_PASSWORD || '',
};

export const requestParams = {
  cursor: '0',
  offset: '0',
  limit: '25',
};
