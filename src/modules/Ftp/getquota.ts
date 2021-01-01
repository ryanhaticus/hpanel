// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aget_quota
export interface getQuotaParameters {
  domain?: string;
  account: string;
}

import { execute } from './index';

export default (param: getQuotaParameters) => {
  return execute({
    function: 'get_quota',
    parameters: param,
  });
};
