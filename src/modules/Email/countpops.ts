// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_pops
export interface CountPopsParameters {}

import { execute } from './index';

export default (param: CountPopsParameters) => {
  return execute({
    function: 'count_pops',
    parameters: param
  });
};
