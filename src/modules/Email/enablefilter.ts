// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_filter
export interface enableFilterParameters {
  account?: number;
  filtername?: number;
}

import { execute } from './index';

export default (param?: enableFilterParameters) => {
  return execute({
    function: 'enable_filter',
    parameters: param
  });
};
