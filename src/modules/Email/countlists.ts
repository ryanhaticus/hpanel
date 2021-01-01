// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_lists

import { execute } from './index';

export default () => {
  return execute({
    function: 'count_lists',
  });
};
