// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Quota%3A%3Aget_quota_info

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_quota_info'
  });
};
