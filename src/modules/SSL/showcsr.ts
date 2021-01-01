// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ashow_csr
export interface showCsrParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: showCsrParameters) => {
  return execute({
    function: 'show_csr',
    parameters: param,
  });
};
