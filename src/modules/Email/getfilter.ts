// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_filter
export interface getFilterParameters {
  account: string;
  filtername: string;
}

import { execute } from './index';

export default (param: getFilterParameters) => {
  return execute({
    function: 'get_filter',
    parameters: param,
  });
};
