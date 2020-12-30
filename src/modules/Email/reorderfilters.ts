// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Areorder_filters
export interface ReorderFiltersParameters {
  mailbox: string;
  [propName: string]: any;
}

import { execute } from './index';

export default (param: ReorderFiltersParameters) => {
  return execute({
    function: 'reorder_filters',
    parameters: param
  });
};
