// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_pops

import { execute } from './index';

export default () => {
  return execute({
    function: 'count_pops'
  });
};
