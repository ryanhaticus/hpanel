// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_default_key_type
export interface setDefaultKeyTypeParameters {
  type: string;
}

import { execute } from './index';

export default (param: setDefaultKeyTypeParameters) => {
  return execute({
    function: 'set_default_key_type',
    parameters: param,
  });
};
