// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ainstalled_hosts

import { execute } from './index';

export default () => {
  return execute({
    function: 'installed_hosts'
  });
};
