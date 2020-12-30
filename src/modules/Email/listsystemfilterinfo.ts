// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_system_filter_info
export interface ListSystemFilterInfoParameters {}

import { execute } from './index';

export default (param: ListSystemFilterInfoParameters) => {
  return execute({
    function: 'list_system_filter_info',
    parameters: param
  });
};
