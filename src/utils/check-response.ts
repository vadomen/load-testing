import { RefinedResponse, ResponseType } from 'k6/http';
// @ts-ignore
import { describe, expect } from './k6chaijs.js';

export const checkResponse = <RT extends ResponseType>(res: RefinedResponse<RT>, describeText: string = 'Check responses'): void => {
  describe(describeText, () => {
    expect(res.status >= 200, 'response status >= 200').to.be.ok;
    expect(res.status < 300, 'response status < 300').to.be.ok;
    expect(res).to.have.validJsonBody();
  });
};
