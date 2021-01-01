// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Alist_secret_keys

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_secret_keys',
  });
};
