// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_forwarders
export interface getForwardersParameters {
  email: string;
}

import { execute } from './index';

export default (param: getForwardersParameters) => {
  return execute({
    function: 'get_forwarders',
    parameters: param,
  });
};
