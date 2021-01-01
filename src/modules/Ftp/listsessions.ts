// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Alist_sessions

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_sessions',
  });
};
