// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BlockIP%3A%3Aadd_ip
export interface AddIpParameters {
  ip: string;
}

import { execute } from './index';

export default (param: AddIpParameters) => {
  return execute({
    function: 'add_ip',
    parameters: param
  });
};
