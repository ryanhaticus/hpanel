// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_forwarders
export interface listForwardersParameters {
  domain?: number;
  regex: number;
}

import { execute } from './index';

export default (param: listForwardersParameters) => {
  return execute({
    function: 'list_forwarders',
    parameters: param
  });
};
