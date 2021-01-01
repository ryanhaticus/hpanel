// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Ais_dav_service_enabled

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_dav_service_enabled',
  });
};
