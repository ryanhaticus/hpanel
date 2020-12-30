// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_main_account_disk_usage_bytes
export interface GetMainAccountDiskUsageBytesParameters {}

import { execute } from './index';

export default (param: GetMainAccountDiskUsageBytesParameters) => {
  return execute({
    function: 'get_main_account_disk_usage_bytes',
    parameters: param
  });
};
