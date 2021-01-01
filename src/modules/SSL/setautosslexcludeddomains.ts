// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_autossl_excluded_domains
export interface setAutosslExcludedDomainsParameters {
  domains?: string;
}

import { execute } from './index';

export default (param?: setAutosslExcludedDomainsParameters) => {
  return execute({
    function: 'set_autossl_excluded_domains',
    parameters: param,
  });
};
