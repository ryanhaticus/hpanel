// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_csr_friendly_name
export interface setCsrFriendlyNameParameters {
  friendly_name: string;
  id: string;
  new_friendly_name: string;
}

import { execute } from './index';

export default (param: setCsrFriendlyNameParameters) => {
  return execute({
    function: 'set_csr_friendly_name',
    parameters: param,
  });
};
