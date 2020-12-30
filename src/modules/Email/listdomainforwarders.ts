// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_domain_forwarders
export interface ListDomainForwardersParameters {
  domain?: string;
}

import { execute } from './index';

export default (param: ListDomainForwardersParameters) => {
  return execute({
    function: 'list_domain_forwarders',
    parameters: param
  });
};
