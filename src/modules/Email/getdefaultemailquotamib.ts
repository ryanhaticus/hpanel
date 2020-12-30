// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_default_email_quota_mib
export interface GetDefaultEmailQuotaMibParameters {}

import { execute } from './index';

export default (param: GetDefaultEmailQuotaMibParameters) => {
  return execute({
    function: 'get_default_email_quota_mib',
    parameters: param
  });
};
