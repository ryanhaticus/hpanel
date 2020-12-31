// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_get_domain_handler
export interface phpGetDomainHandlerParameters {
  type?: number;
  vhost: number;
}

import { execute } from './index';

export default (param: phpGetDomainHandlerParameters) => {
  return execute({
    function: 'php_get_domain_handler',
    parameters: param
  });
};
