// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPAddons%3A%3Aget_available_addons

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_available_addons'
  });
};
