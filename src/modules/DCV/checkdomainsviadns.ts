// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DCV%3A%3Acheck_domains_via_dns
export interface checkDomainsViaDnsParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: checkDomainsViaDnsParameters) => {
  return execute({
    function: 'check_domains_via_dns',
    parameters: param
  });
};
