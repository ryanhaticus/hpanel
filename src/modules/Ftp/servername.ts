// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aserver_name

import { execute } from './index';

export default () => {
  return execute({
    function: 'server_name'
  });
};
