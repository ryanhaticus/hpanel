// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Resellers%3A%3Alist_accounts

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_accounts',
  });
};
