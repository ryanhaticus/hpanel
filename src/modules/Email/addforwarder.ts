// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_forwarder
export interface addForwarderParameters {
  domain?: number;
  email?: number;
  fwdopt?: number;
  fwdemail: number;
  fwdsystem: number;
  failmsgs: number;
  pipefwd: number;
}

import { execute } from './index';

export default (param: addForwarderParameters) => {
  return execute({
    function: 'add_forwarder',
    parameters: param
  });
};
