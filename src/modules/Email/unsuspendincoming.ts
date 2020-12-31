// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aunsuspend_incoming
export interface unsuspendIncomingParameters {
  email: number;
}

import { execute } from './index';

export default (param: unsuspendIncomingParameters) => {
  return execute({
    function: 'unsuspend_incoming',
    parameters: param
  });
};
