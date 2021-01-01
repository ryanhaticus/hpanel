// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Ainstall_dkim_private_keys
export interface installDkimPrivateKeysParameters {
  domain: string;
  key: string;
}

import { execute } from './index';

export default (param: installDkimPrivateKeysParameters) => {
  return execute({
    function: 'install_dkim_private_keys',
    parameters: param,
  });
};
