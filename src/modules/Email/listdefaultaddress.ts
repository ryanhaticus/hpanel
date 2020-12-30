// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_default_address
export interface ListDefaultAddressParameters {
  domain?: string;
  user: string;
}

import { execute } from './index';

export default (param: ListDefaultAddressParameters) => {
  return execute({
    function: 'list_default_address',
    parameters: param
  });
};
