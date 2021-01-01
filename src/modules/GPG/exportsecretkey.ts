// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Aexport_secret_key
export interface exportSecretKeyParameters {
  key_id: string;
  passphrase?: string;
}

import { execute } from './index';

export default (param: exportSecretKeyParameters) => {
  return execute({
    function: 'export_secret_key',
    parameters: param,
  });
};
