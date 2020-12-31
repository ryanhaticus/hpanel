// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_filter
export interface disableFilterParameters {
  account?: number;
  filtername?: number;
}

import { execute } from './index';

export default (param?: disableFilterParameters) => {
  return execute({
    function: 'disable_filter',
    parameters: param
  });
};
