// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_lists_total_disk_usage

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_lists_total_disk_usage',
  });
};
