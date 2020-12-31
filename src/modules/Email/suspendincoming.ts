// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Asuspend_incoming
export interface suspendIncomingParameters {
  email: number;
}

import { execute } from './index';

export default (param: suspendIncomingParameters) => {
  return execute({
    function: 'suspend_incoming',
    parameters: param
  });
};
