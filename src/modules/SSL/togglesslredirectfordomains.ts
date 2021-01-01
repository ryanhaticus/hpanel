// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Atoggle_ssl_redirect_for_domains
export interface toggleSslRedirectForDomainsParameters {
  domains: string;
  state: boolean;
}

import { execute } from './index';

export default (param: toggleSslRedirectForDomainsParameters) => {
  return execute({
    function: 'toggle_ssl_redirect_for_domains',
    parameters: param,
  });
};
