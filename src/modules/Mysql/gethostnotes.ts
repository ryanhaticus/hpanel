// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aget_host_notes

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_host_notes'
  });
};
