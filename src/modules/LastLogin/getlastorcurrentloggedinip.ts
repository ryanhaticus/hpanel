// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LastLogin%3A%3Aget_last_or_current_logged_in_ip

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_last_or_current_logged_in_ip',
  });
};
