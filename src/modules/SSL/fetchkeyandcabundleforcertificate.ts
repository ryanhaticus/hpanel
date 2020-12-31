// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afetch_key_and_cabundle_for_certificate
export interface fetchKeyAndCabundleForCertificateParameters {
  certificate?: number;
}

import { execute } from './index';

export default (param?: fetchKeyAndCabundleForCertificateParameters) => {
  return execute({
    function: 'fetch_key_and_cabundle_for_certificate',
    parameters: param
  });
};
