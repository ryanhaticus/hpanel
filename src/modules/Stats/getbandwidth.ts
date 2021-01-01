// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Stats%3A%3Aget_bandwidth
export interface getBandwidthParameters {
  timezone?: string;
}

import { execute } from './index';

export default (param?: getBandwidthParameters) => {
  return execute({
    function: 'get_bandwidth',
    parameters: param,
  });
};
