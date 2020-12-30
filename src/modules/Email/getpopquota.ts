// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_pop_quota
export interface GetPopQuotaParameters {
  email: string;
  domain?: string;
  as_bytes?: boolean;
}

import { execute } from './index';

export default (param: GetPopQuotaParameters) => {
  return execute({
    function: 'get_pop_quota',
    parameters: param
  });
};
