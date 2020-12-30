// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_forwarders_backups

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_forwarders_backups'
  });
};
