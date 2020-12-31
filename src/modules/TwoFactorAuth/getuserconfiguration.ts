// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+TwoFactorAuth%3A%3Aget_user_configuration

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_user_configuration'
  });
};
