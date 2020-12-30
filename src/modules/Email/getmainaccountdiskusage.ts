// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_main_account_disk_usage
export interface GetMainAccountDiskUsageParameters {}

import { execute } from './index';

export default (param: GetMainAccountDiskUsageParameters) => {
  return execute({
    function: 'get_main_account_disk_usage',
    parameters: param
  });
};
