// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aconfigured_modules

import { execute } from './index';

export default () => {
  return execute({
    function: 'configured_modules',
  });
};
