// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Arequest_ssl_certificates
export interface requestSslCertificatesParameters {
  access_token?: number;
  certificate?: number;
  product_id?: number;
  price?: number;
  subject_names?: number;
  validity_period?: number;
  vhost_names: number;
  provider?: number;
  url_after_checkout: number;
  identity_verification: number;
}

import { execute } from './index';

export default (param: requestSslCertificatesParameters) => {
  return execute({
    function: 'request_ssl_certificates',
    parameters: param
  });
};
