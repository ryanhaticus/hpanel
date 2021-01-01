// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Acan_ssl_redirect

import { execute } from './index';

export default () => {
  return execute({
    function: 'can_ssl_redirect',
  });
};
