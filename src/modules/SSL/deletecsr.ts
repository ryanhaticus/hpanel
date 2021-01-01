// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adelete_csr
export interface deleteCsrParameters {
  id?: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param?: deleteCsrParameters) => {
  return execute({
    function: 'delete_csr',
    parameters: param,
  });
};
