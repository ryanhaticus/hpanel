// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ais_integer

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_integer',
  });
};
