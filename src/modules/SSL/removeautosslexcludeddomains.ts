// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aremove_autossl_excluded_domains
export interface removeAutosslExcludedDomainsParameters {
  domains?: number;
}

import { execute } from './index';

export default (param?: removeAutosslExcludedDomainsParameters) => {
  return execute({
    function: 'remove_autossl_excluded_domains',
    parameters: param
  });
};
