// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afetch_best_for_domain
export interface fetchBestForDomainParameters {
  domain: string;
}

import { execute } from './index';

export default (param: fetchBestForDomainParameters) => {
  return execute({
    function: 'fetch_best_for_domain',
    parameters: param,
  });
};
