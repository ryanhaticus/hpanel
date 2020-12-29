// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_domain_forwarder
export interface DeleteDomainForwarderParameters {
  domain: string;
}

import { execute } from './index';

export default (param: DeleteDomainForwarderParameters) => {
  return execute({
    function: 'delete_domain_forwarder',
    parameters: param
  });
};
