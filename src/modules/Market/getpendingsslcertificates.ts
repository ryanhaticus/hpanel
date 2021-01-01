// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_pending_ssl_certificates
export interface getPendingSslCertificatesParameters {
  provider: string;
}

import { execute } from './index';

export default (param: getPendingSslCertificatesParameters) => {
  return execute({
    function: 'get_pending_ssl_certificates',
    parameters: param,
  });
};
