// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ais_integer
export interface IsIntegerParameters {}

import { execute } from './index';

export default (param: IsIntegerParameters) => {
  return execute({
    function: 'is_integer',
    parameters: param
  });
};
