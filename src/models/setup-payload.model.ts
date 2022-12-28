import { Headers } from './headers.type';

export interface SetupPayloadModel {
  serviceAlligatorBaseUrl: string;
  serviceCaimanBaseUrl: string;
  headers: Headers;
  params: {
    cursor: string;
    offset: string;
    limit: string;
  };
}
