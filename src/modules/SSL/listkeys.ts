// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Alist_keys

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_keys'
  });
};
