// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_charsets

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_charsets'
  });
};
