// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Agenerate_cert
export interface generateCertParameters {
  domains?: number;
  countryName?: number;
  stateOrProvinceName?: number;
  localityName?: number;
  organizationName?: number;
  organizationalUnitName: number;
  emailAddress: number;
  key_id?: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: generateCertParameters) => {
  return execute({
    function: 'generate_cert',
    parameters: param
  });
};
