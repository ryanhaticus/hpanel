// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Contactus%3A%3Ais_enabled

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_enabled',
  });
};
