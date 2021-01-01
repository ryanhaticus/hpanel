// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Achange_mx
export interface changeMxParameters {
  domain: string;
  exchanger: string;
  oldexchanger: string;
  priority: number;
  oldpriority?: number;
  alwaysaccept?: string;
}

import { execute } from './index';

export default (param: changeMxParameters) => {
  return execute({
    function: 'change_mx',
    parameters: param,
  });
};
