// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_default_email_quota
export interface GetDefaultEmailQuotaParameters {}

import { execute } from './index';

export default (param: GetDefaultEmailQuotaParameters) => {
  return execute({
    function: 'get_default_email_quota',
    parameters: param
  });
};
