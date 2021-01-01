// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BlockIP%3A%3Aremove_ip
export interface removeIpParameters {
  ip: string;
}

import { execute } from './index';

export default (param: removeIpParameters) => {
  return execute({
    function: 'remove_ip',
    parameters: param,
  });
};
