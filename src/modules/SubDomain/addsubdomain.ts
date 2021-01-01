// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SubDomain%3A%3Aaddsubdomain
export interface addsubdomainParameters {
  domain: string;
  rootdomain: string;
  canoff?: boolean;
  dir?: string;
  disallowdot?: boolean;
}

import { execute } from './index';

export default (param: addsubdomainParameters) => {
  return execute({
    function: 'addsubdomain',
    parameters: param,
  });
};
