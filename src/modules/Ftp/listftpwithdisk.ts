// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Alist_ftp_with_disk

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_ftp_with_disk'
  });
};
