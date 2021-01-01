// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ModSecurity%3A%3Aenable_domains
export interface enableDomainsParameters {
  domains: string;
}

import { execute } from './index';

export default (param: enableDomainsParameters) => {
  return execute({
    function: 'enable_domains',
    parameters: param,
  });
};
