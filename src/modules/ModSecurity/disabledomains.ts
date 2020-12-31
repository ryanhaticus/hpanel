// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ModSecurity%3A%3Adisable_domains
export interface disableDomainsParameters {
  domains?: number;
}

import { execute } from './index';

export default (param?: disableDomainsParameters) => {
  return execute({
    function: 'disable_domains',
    parameters: param
  });
};
