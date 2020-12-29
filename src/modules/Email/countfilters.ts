// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_filters
export interface CountFiltersParameters {}

import { execute } from './index';

export default (param: CountFiltersParameters) => {
  return execute({
    function: 'count_filters',
    parameters: param
  });
};
