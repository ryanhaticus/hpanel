// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_max_email_quota
export interface GetMaxEmailQuotaParameters {}

import { execute } from './index';

export default (param: GetMaxEmailQuotaParameters) => {
  return execute({
    function: 'get_max_email_quota',
    parameters: param
  });
};
