// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afetch_cert_info
export interface fetchCertInfoParameters {
  id: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: fetchCertInfoParameters) => {
  return execute({
    function: 'fetch_cert_info',
    parameters: param
  });
};
