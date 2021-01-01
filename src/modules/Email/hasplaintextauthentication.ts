// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahas_plaintext_authentication

import { execute } from './index';

export default () => {
  return execute({
    function: 'has_plaintext_authentication',
  });
};
