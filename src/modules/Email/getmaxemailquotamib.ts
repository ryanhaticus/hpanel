// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_max_email_quota_mib
export interface GetMaxEmailQuotaMibParameters {}

import { execute } from './index';

export default (param: GetMaxEmailQuotaMibParameters) => {
  return execute({
    function: 'get_max_email_quota_mib',
    parameters: param
  });
};
