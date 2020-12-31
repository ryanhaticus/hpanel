// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_mx
export interface addMxParameters {
  domain?: number;
  exchanger?: number;
  priority?: number;
  alwaysaccept: number;
}

import { execute } from './index';

export default (param: addMxParameters) => {
  return execute({
    function: 'add_mx',
    parameters: param
  });
};
