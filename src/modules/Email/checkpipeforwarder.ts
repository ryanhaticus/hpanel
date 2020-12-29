// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acheck_pipe_forwarder
export interface CheckPipeForwarderParameters {
  pipe_name: string;
}

import { execute } from './index';

export default (param: CheckPipeForwarderParameters) => {
  return execute({
    function: 'check_pipe_forwarder',
    parameters: param
  });
};
