// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aset_default_address
export interface setDefaultAddressParameters {
  domain: number;
  fwdopt?: number;
  fwdemail: number;
  failmsgs: number;
  pipefwd: number;
}

import { execute } from './index';

export default (param: setDefaultAddressParameters) => {
  return execute({
    function: 'set_default_address',
    parameters: param
  });
};
