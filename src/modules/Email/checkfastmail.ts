// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acheck_fastmail

import { execute } from './index';

export default () => {
  return execute({
    function: 'check_fastmail',
  });
};
