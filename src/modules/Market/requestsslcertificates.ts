// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Arequest_ssl_certificates
export interface requestSslCertificatesParameters {
  access_token: string;
  certificate: number;
  product_id: string;
  price: string;
  subject_names: number;
  validity_period: number;
  vhost_names?: number;
  provider: string;
  url_after_checkout?: string;
  identity_verification?: number;
}

import { execute } from './index';

export default (param: requestSslCertificatesParameters) => {
  return execute({
    function: 'request_ssl_certificates',
    parameters: param,
  });
};
