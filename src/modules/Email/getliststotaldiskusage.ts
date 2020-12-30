// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_lists_total_disk_usage
export interface GetListsTotalDiskUsageParameters {}

import { execute } from './index';

export default (param: GetListsTotalDiskUsageParameters) => {
  return execute({
    function: 'get_lists_total_disk_usage',
    parameters: param
  });
};
