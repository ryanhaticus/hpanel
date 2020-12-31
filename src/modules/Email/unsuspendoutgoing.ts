// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aunsuspend_outgoing
export interface unsuspendOutgoingParameters {
  email?: number;
}

import { execute } from './index';

export default (param?: unsuspendOutgoingParameters) => {
  return execute({
    function: 'unsuspend_outgoing',
    parameters: param
  });
};
