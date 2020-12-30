// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Astats_db_status
export interface StatsDbStatusParameters {}

import { execute } from './index';

export default (param: StatsDbStatusParameters) => {
  return execute({
    function: 'stats_db_status',
    parameters: param
  });
};
