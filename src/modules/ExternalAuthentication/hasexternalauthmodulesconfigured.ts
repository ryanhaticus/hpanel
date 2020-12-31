// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Ahas_external_auth_modules_configured

import { execute } from './index';

export default () => {
  return execute({
    function: 'has_external_auth_modules_configured'
  });
};
