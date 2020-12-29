// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_mx
export interface AddMxParameters {
  domain: string;
  exchanger: string;
  priority: number;
  alwaysaccept?: string;
}

import { execute } from './index';

export default (param: AddMxParameters) => {
  return execute({
    function: 'add_mx',
    parameters: param
  });
};
