// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Alocate_server

import { execute } from './index';

export default () => {
  return execute({
    function: 'locate_server',
  });
};
