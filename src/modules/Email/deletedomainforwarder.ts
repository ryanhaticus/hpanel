// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_domain_forwarder
export interface deleteDomainForwarderParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: deleteDomainForwarderParameters) => {
  return execute({
    function: 'delete_domain_forwarder',
    parameters: param
  });
};
