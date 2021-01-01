// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Alist_ssl_items
export interface listSslItemsParameters {
  domains?: string;
  item?: string;
}

import { execute } from './index';

export default (param?: listSslItemsParameters) => {
  return execute({
    function: 'list_ssl_items',
    parameters: param,
  });
};
