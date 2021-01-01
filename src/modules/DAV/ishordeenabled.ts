// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Ais_horde_enabled

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_horde_enabled',
  });
};
