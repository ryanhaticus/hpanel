// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Agenerate_key
export interface generateKeyParameters {
  keytype?: string;
  keysize?: number;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: generateKeyParameters) => {
  return execute({
    function: 'generate_key',
    parameters: param,
  });
};
