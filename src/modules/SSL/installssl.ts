// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ainstall_ssl
export interface installSslParameters {
  domain?: number;
  cert?: number;
  key?: number;
  cabundle: number;
}

import { execute } from './index';

export default (param: installSslParameters) => {
  return execute({
    function: 'install_ssl',
    parameters: param
  });
};
