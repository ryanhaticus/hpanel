// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DomainInfo%3A%3Alist_domains

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_domains',
  });
};
