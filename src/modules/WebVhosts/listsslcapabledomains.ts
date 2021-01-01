// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebVhosts%3A%3Alist_ssl_capable_domains

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_ssl_capable_domains',
  });
};
