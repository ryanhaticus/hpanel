// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BlockIP%3A%3Aadd_ip
export interface addIpParameters {
  ip: string;
}

import { execute } from './index';

export default (param: addIpParameters) => {
  return execute({
    function: 'add_ip',
    parameters: param,
  });
};
