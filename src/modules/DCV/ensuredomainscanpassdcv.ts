// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DCV%3A%3Aensure_domains_can_pass_dcv
export interface ensureDomainsCanPassDcvParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: ensureDomainsCanPassDcvParameters) => {
  return execute({
    function: 'ensure_domains_can_pass_dcv',
    parameters: param
  });
};
