// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afind_certificates_for_key
export interface findCertificatesForKeyParameters {
  id: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: findCertificatesForKeyParameters) => {
  return execute({
    function: 'find_certificates_for_key',
    parameters: param
  });
};
