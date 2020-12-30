// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahas_plaintext_authentication
export interface HasPlaintextAuthenticationParameters {}

import { execute } from './index';

export default (param: HasPlaintextAuthenticationParameters) => {
  return execute({
    function: 'has_plaintext_authentication',
    parameters: param
  });
};
