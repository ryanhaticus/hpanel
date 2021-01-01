// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DomainInfo%3A%3Amain_domain_builtin_subdomain_aliases

import { execute } from './index';

export default () => {
  return execute({
    function: 'main_domain_builtin_subdomain_aliases',
  });
};
