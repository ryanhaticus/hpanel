// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ashow_cert
export interface showCertParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: showCertParameters) => {
  return execute({
    function: 'show_cert',
    parameters: param,
  });
};
