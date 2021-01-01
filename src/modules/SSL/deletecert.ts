// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adelete_cert
export interface deleteCertParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: deleteCertParameters) => {
  return execute({
    function: 'delete_cert',
    parameters: param,
  });
};
