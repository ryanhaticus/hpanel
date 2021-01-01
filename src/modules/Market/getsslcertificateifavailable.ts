// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_ssl_certificate_if_available
export interface getSslCertificateIfAvailableParameters {
  provider: string;
  order_item_id: string;
}

import { execute } from './index';

export default (param: getSslCertificateIfAvailableParameters) => {
  return execute({
    function: 'get_ssl_certificate_if_available',
    parameters: param,
  });
};
