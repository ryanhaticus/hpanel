// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Restore%3A%3Aget_users

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_users',
  });
};
