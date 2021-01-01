// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_quota
export interface setQuotaParameters {
  user: string;
  quota: number;
  kill?: boolean;
  domain?: string;
}

import { execute } from './index';

export default (param: setQuotaParameters) => {
  return execute({
    function: 'set_quota',
    parameters: param,
  });
};
