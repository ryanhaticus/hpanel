// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_forwarders
export interface CountForwardersParameters {}

import { execute } from './index';

export default (param: CountForwardersParameters) => {
  return execute({
    function: 'count_forwarders',
    parameters: param
  });
};
