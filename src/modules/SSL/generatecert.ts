// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Agenerate_cert
export interface generateCertParameters {
  domains: string;
  countryName: string;
  stateOrProvinceName: string;
  localityName: string;
  organizationName: string;
  organizationalUnitName?: string;
  emailAddress?: string;
  key_id: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param: generateCertParameters) => {
  return execute({
    function: 'generate_cert',
    parameters: param,
  });
};
