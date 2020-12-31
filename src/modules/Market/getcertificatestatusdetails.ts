// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_certificate_status_details
export interface getCertificateStatusDetailsParameters {
  order_item_id?: number;
  provider?: number;
}

import { execute } from './index';

export default (param?: getCertificateStatusDetailsParameters) => {
  return execute({
    function: 'get_certificate_status_details',
    parameters: param
  });
};
