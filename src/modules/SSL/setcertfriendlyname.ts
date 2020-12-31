// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_cert_friendly_name
export interface setCertFriendlyNameParameters {
  friendly_nameorid?: number;
  new_friendly_name?: number;
}

import { execute } from './index';

export default (param?: setCertFriendlyNameParameters) => {
  return execute({
    function: 'set_cert_friendly_name',
    parameters: param
  });
};
