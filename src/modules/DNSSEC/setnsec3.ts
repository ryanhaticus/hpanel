// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aset_nsec3
export interface setNsec3Parameters {
  domain: string;
  nsec3_opt_out: boolean;
  nsec3_iterations: number;
  nsec3_narrow: boolean;
  nsec3_salt: string;
}

import { execute } from './index';

export default (param: setNsec3Parameters) => {
  return execute({
    function: 'set_nsec3',
    parameters: param,
  });
};
