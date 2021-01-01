// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Acreate_shopping_cart
export interface createShoppingCartParameters {
  provider: string;
  access_token: string;
  url_after_checkout: string;
  item: number;
  product_id?: string;
  item_parameter?: number;
}

import { execute } from './index';

export default (param: createShoppingCartParameters) => {
  return execute({
    function: 'create_shopping_cart',
    parameters: param,
  });
};
