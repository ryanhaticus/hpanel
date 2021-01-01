// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_key_friendly_name
export interface setKeyFriendlyNameParameters {
  friendly_name: string;
  id: string;
  new_friendly_name: string;
}

import { execute } from './index';

export default (param: setKeyFriendlyNameParameters) => {
  return execute({
    function: 'set_key_friendly_name',
    parameters: param,
  });
};
