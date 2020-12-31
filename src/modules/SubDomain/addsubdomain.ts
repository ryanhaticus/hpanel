// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SubDomain%3A%3Aaddsubdomain
export interface addsubdomainParameters {
  domain?: number;
  rootdomain?: number;
  canoff: boolean;
  dir: number;
  disallowdot: boolean;
}

import { execute } from './index';

export default (param: addsubdomainParameters) => {
  return execute({
    function: 'addsubdomain',
    parameters: param
  });
};
