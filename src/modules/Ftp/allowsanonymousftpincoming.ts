// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aallows_anonymous_ftp_incoming

import { execute } from './index';

export default () => {
  return execute({
    function: 'allows_anonymous_ftp_incoming',
  });
};
