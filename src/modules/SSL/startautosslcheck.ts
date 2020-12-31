// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Astart_autossl_check

import { execute } from './index';

export default () => {
  return execute({
    function: 'start_autossl_check'
  });
};
