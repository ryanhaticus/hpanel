// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Agenerate_key
export interface generateKeyParameters {
  name: string;
  comment?: string;
  email: string;
  expire?: string;
  no_expire?: boolean;
  keysize?: number;
  passphrase?: string;
}

import { execute } from './index';

export default (param: generateKeyParameters) => {
  return execute({
    function: 'generate_key',
    parameters: param,
  });
};
