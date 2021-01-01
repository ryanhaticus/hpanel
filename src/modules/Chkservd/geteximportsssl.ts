// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Chkservd%3A%3Aget_exim_ports_ssl

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_exim_ports_ssl',
  });
};
