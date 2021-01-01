// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SpamAssassin%3A%3Aget_symbolic_test_names

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_symbolic_test_names',
  });
};
