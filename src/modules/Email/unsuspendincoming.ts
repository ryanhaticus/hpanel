// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aunsuspend_incoming
export interface UnsuspendIncomingParameters {
  email?: string;
}

import { execute } from './index';

export default (param: UnsuspendIncomingParameters) => {
  return execute({
    function: 'unsuspend_incoming',
    parameters: param
  });
};
