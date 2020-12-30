// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Asuspend_outgoing
export interface SuspendOutgoingParameters {
  email: string;
}

import { execute } from './index';

export default (param: SuspendOutgoingParameters) => {
  return execute({
    function: 'suspend_outgoing',
    parameters: param
  });
};
