// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_max_email_quota_mib

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_max_email_quota_mib',
  });
};
