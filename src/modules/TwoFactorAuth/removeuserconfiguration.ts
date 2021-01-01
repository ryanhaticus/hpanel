// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+TwoFactorAuth%3A%3Aremove_user_configuration

import { execute } from './index';

export default () => {
  return execute({
    function: 'remove_user_configuration',
  });
};
