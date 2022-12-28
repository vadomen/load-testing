import { Options } from 'k6/options';

export const defaultOptions: Options = {
  stages: [
    // { duration: '20s', target: 10 },
    // { duration: '10m', target: 50 },
    // { duration: '5m', target: 50 },
    { duration: '10s', target: 1 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['avg<500', 'p(95)<250'],
  },
};
