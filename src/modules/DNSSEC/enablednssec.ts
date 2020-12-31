// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aenable_dnssec
export interface enableDnssecParameters {
  domain?: number;
  use_nsec3: boolean;
  nsec3_opt_out: boolean;
  nsec3_iterations: number;
  nsec3_narrow: boolean;
  nsec3_salt: number;
  algo_num: number;
  key_setup: number;
  active: boolean;
}

import { execute } from './index';

export default (param: enableDnssecParameters) => {
  return execute({
    function: 'enable_dnssec',
    parameters: param
  });
};
