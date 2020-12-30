// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Asuspend_incoming
export interface SuspendIncomingParameters {
  email?: string;
}

import { execute } from './index';

export default (param: SuspendIncomingParameters) => {
  return execute({
    function: 'suspend_incoming',
    parameters: param
  });
};
