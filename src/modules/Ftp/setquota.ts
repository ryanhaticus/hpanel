// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_quota
export interface setQuotaParameters {
  user?: number;
  quota?: number;
  kill: boolean;
  domain: number;
}

import { execute } from './index';

export default (param: setQuotaParameters) => {
  return execute({
    function: 'set_quota',
    parameters: param
  });
};
