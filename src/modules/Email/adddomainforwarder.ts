// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_domain_forwarder
export interface addDomainForwarderParameters {
  domain: string;
  destdomain: string;
}

import { execute } from './index';

export default (param: addDomainForwarderParameters) => {
  return execute({
    function: 'add_domain_forwarder',
    parameters: param,
  });
};
