// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DomainInfo%3A%3Adomains_data
export interface domainsDataParameters {
  format: number;
  return_https_redirects_status: boolean;
}

import { execute } from './index';

export default (param: domainsDataParameters) => {
  return execute({
    function: 'domains_data',
    parameters: param
  });
};
