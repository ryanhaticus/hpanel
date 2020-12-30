// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_forwarders

import { execute } from './index';

export default () => {
  return execute({
    function: 'count_forwarders'
  });
};
