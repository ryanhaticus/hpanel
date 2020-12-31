// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNS%3A%3Aensure_domains_reside_only_locally
export interface ensureDomainsResideOnlyLocallyParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: ensureDomainsResideOnlyLocallyParameters) => {
  return execute({
    function: 'ensure_domains_reside_only_locally',
    parameters: param
  });
};
