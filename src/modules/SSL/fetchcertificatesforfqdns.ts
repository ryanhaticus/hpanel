// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afetch_certificates_for_fqdns
export interface fetchCertificatesForFqdnsParameters {
  domains?: number;
}

import { execute } from './index';

export default (param?: fetchCertificatesForFqdnsParameters) => {
  return execute({
    function: 'fetch_certificates_for_fqdns',
    parameters: param
  });
};
