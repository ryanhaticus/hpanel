// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aadd_autossl_excluded_domains
export interface addAutosslExcludedDomainsParameters {
  domains: string;
}

import { execute } from './index';

export default (param: addAutosslExcludedDomainsParameters) => {
  return execute({
    function: 'add_autossl_excluded_domains',
    parameters: param,
  });
};
