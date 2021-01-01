// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Acheck_shared_cert

import { execute } from './index';

export default () => {
  return execute({
    function: 'check_shared_cert',
  });
};
