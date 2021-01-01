// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ainstall_ssl
export interface installSslParameters {
  domain: string;
  cert: string;
  key: string;
  cabundle?: string;
}

import { execute } from './index';

export default (param: installSslParameters) => {
  return execute({
    function: 'install_ssl',
    parameters: param,
  });
};
