// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_system_filter_info

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_system_filter_info',
  });
};
