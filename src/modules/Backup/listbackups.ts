// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Alist_backups

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_backups'
  });
};
