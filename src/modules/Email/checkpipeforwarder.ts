// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acheck_pipe_forwarder
export interface checkPipeForwarderParameters {
  pipe_name?: number;
}

import { execute } from './index';

export default (param?: checkPipeForwarderParameters) => {
  return execute({
    function: 'check_pipe_forwarder',
    parameters: param
  });
};
