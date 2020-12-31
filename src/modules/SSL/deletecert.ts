// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adelete_cert
export interface deleteCertParameters {
  id: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: deleteCertParameters) => {
  return execute({
    function: 'delete_cert',
    parameters: param
  });
};
