// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_get_impacted_domains
export interface phpGetImpactedDomainsParameters {
  system_default: boolean;
  domain: number;
  location: number;
}

import { execute } from './index';

export default (param: phpGetImpactedDomainsParameters) => {
  return execute({
    function: 'php_get_impacted_domains',
    parameters: param
  });
};
