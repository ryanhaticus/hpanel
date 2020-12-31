// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ais_autossl_check_in_progress

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_autossl_check_in_progress'
  });
};
