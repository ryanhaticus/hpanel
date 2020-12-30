// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_forwarders
export interface ListForwardersParameters {
  domain: string;
  regex?: string;
}

import { execute } from './index';

export default (param: ListForwardersParameters) => {
  return execute({
    function: 'list_forwarders',
    parameters: param
  });
};
