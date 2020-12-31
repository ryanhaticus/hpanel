// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aget_autossl_problems

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_autossl_problems'
  });
};
