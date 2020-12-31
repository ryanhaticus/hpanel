// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ModSecurity%3A%3Ahas_modsecurity_installed

import { execute } from './index';

export default () => {
  return execute({
    function: 'has_modsecurity_installed'
  });
};
