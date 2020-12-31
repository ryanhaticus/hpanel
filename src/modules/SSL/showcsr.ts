// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ashow_csr
export interface showCsrParameters {
  id: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: showCsrParameters) => {
  return execute({
    function: 'show_csr',
    parameters: param
  });
};
