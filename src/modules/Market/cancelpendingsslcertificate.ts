// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Acancel_pending_ssl_certificate
export interface cancelPendingSslCertificateParameters {
  provider?: number;
  order_item_id?: number;
}

import { execute } from './index';

export default (param?: cancelPendingSslCertificateParameters) => {
  return execute({
    function: 'cancel_pending_ssl_certificate',
    parameters: param
  });
};
