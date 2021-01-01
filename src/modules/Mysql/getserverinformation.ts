// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aget_server_information

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_server_information',
  });
};
