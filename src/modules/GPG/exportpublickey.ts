// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Aexport_public_key
export interface exportPublicKeyParameters {
  key_id: string;
}

import { execute } from './index';

export default (param: exportPublicKeyParameters) => {
  return execute({
    function: 'export_public_key',
    parameters: param,
  });
};
