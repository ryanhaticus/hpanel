// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_filters_backups

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_filters_backups',
  });
};
