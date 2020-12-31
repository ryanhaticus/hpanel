// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Alist_handlers
export interface listHandlersParameters {
  type?: number;
}

import { execute } from './index';

export default (param?: listHandlersParameters) => {
  return execute({
    function: 'list_handlers',
    parameters: param
  });
};
