// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aset_url_after_checkout
export interface setUrlAfterCheckoutParameters {
  provider: string;
  access_token: string;
  order_id: number;
  url_after_checkout: string;
}

import { execute } from './index';

export default (param: setUrlAfterCheckoutParameters) => {
  return execute({
    function: 'set_url_after_checkout',
    parameters: param,
  });
};
