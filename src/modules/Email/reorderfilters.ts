// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Areorder_filters
export interface reorderFiltersParameters {
  mailbox: string;
  [propName: string]: any;
}

import { execute } from './index';

export default (param: reorderFiltersParameters) => {
  return execute({
    function: 'reorder_filters',
    parameters: param,
  });
};
