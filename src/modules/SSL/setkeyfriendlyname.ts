// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_key_friendly_name
export interface setKeyFriendlyNameParameters {
  friendly_name?: number;
  id?: number;
  new_friendly_name?: number;
}

import { execute } from './index';

export default (param?: setKeyFriendlyNameParameters) => {
  return execute({
    function: 'set_key_friendly_name',
    parameters: param
  });
};
