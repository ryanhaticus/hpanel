// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aadd_zone_key

import { execute } from './index';

export default () => {
  return execute({
    function: 'add_zone_key',
  });
};
