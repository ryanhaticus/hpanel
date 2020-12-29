// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_lists
export interface CountListsParameters {}

import { execute } from './index';

export default (param: CountListsParameters) => {
  return execute({
    function: 'count_flists',
    parameters: param
  });
};
