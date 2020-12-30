// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_mxs
export interface ListMxsParameters {
  domain?: string;
}

import { execute } from './index';

export default (param?: ListMxsParameters) => {
  return execute({
    function: 'list_mxs',
    parameters: param
  });
};
