// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aget_ftp_daemon_info

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_ftp_daemon_info'
  });
};
