// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_domain_forwarders
export interface listDomainForwardersParameters {
  domain: number;
}

import { execute } from './index';

export default (param: listDomainForwardersParameters) => {
  return execute({
    function: 'list_domain_forwarders',
    parameters: param
  });
};
