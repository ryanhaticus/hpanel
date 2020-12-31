// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Astats_db_status

import { execute } from './index';

export default () => {
  return execute({
    function: 'stats_db_status'
  });
};
