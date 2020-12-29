// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Achange_mx
export interface ChangeMxParameters {
  domain: string;
  exchanger: string;
  oldexchanger: string;
  priority: number;
  oldpriority?: number;
  alwaysaccept?: string;
}

import { execute } from './index';

export default (param: ChangeMxParameters) => {
  return execute({
    function: 'change_mx',
    parameters: param
  });
};
