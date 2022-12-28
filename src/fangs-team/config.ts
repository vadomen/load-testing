export const hosts = {
  serviceAlligatorBaseUrl: process.env.FANGS_TEAM_ALLIGATOR_HOST || '',
  serviceCaimanBaseUrl: process.env.FANGS_TEAM_CAIMAN_HOST || '',
};

export const auth = {
  login: process.env.FANGS_TEAM_ALLIGATOR_LOGIN || '',
  password: process.env.FANGS_TEAM_ALLIGATOR_PASSWORD || '',
  caimanLogin: process.env.FANGS_TEAM_CAIMAN_LOGIN || '',
  caimanPassword: process.env.FANGS_TEAM_CAIMAN_PASSWORD || '',
};

export const requestParams = {
  cursor: '0',
  offset: '0',
  limit: '25',
};
