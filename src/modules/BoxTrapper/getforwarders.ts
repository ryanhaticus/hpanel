// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_forwarders
export interface GetForwardersParameters {
  email: string;
}

import { execute } from './index';

export default (param: GetForwardersParameters) => {
  return execute({
    function: 'get_forwarders',
    parameters: param
  });
};
