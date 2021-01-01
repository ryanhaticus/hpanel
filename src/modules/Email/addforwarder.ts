// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_forwarder
export interface addForwarderParameters {
  domain: string;
  email: string;
  fwdopt: string;
  fwdemail?: string;
  fwdsystem?: string;
  failmsgs?: string;
  pipefwd?: string;
}

import { execute } from './index';

export default (param: addForwarderParameters) => {
  return execute({
    function: 'add_forwarder',
    parameters: param,
  });
};
