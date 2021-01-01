// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_disk_usage
export interface getDiskUsageParameters {
  user: string;
  domain: string;
}

import { execute } from './index';

export default (param: getDiskUsageParameters) => {
  return execute({
    function: 'get_disk_usage',
    parameters: param,
  });
};
