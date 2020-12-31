// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Achange_mx
export interface changeMxParameters {
  domain?: number;
  exchanger?: number;
  oldexchanger?: number;
  priority?: number;
  oldpriority: number;
  alwaysaccept: number;
}

import { execute } from './index';

export default (param: changeMxParameters) => {
  return execute({
    function: 'change_mx',
    parameters: param
  });
};
