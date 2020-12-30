// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_filters
export interface ListFiltersParameters {
  account?: string;
}

import { execute } from './index';

export default (param?: ListFiltersParameters) => {
  return execute({
    function: 'list_filters',
    parameters: param
  });
};
