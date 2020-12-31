// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Agenerate_key
export interface generateKeyParameters {
  name?: number;
  comment: number;
  email?: number;
  expire: number;
  no_expire: boolean;
  keysize: number;
  passphrase: number;
}

import { execute } from './index';

export default (param: generateKeyParameters) => {
  return execute({
    function: 'generate_key',
    parameters: param
  });
};
