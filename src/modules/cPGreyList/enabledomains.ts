// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPGreyList%3A%3Aenable_domains
export interface enableDomainsParameters {
  domains?: number;
}

import { execute } from './index';

export default (param?: enableDomainsParameters) => {
  return execute({
    function: 'enable_domains',
    parameters: param
  });
};
