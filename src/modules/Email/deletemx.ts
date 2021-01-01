// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_mx
export interface deleteMxParameters {
  domain: string;
  exchanger: string;
  priority: number;
}

import { execute } from './index';

export default (param: deleteMxParameters) => {
  return execute({
    function: 'delete_mx',
    parameters: param,
  });
};
