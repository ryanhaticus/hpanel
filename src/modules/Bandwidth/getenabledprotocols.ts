// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Bandwidth%3A%3Aget_enabled_protocols

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_enabled_protocols',
  });
};
