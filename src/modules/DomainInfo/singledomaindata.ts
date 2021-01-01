// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DomainInfo%3A%3Asingle_domain_data
export interface singleDomainDataParameters {
  domain: string;
  return_https_redirect_status?: boolean;
}

import { execute } from './index';

export default (param: singleDomainDataParameters) => {
  return execute({
    function: 'single_domain_data',
    parameters: param,
  });
};
