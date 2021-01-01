// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_all_products

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_all_products',
  });
};
