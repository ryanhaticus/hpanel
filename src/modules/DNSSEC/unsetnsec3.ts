// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aunset_nsec3
export interface unsetNsec3Parameters {
  domain: string;
}

import { execute } from './index';

export default (param: unsetNsec3Parameters) => {
  return execute({
    function: 'unset_nsec3',
    parameters: param,
  });
};
