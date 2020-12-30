// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_filter
export interface DisableFilterParameters {
  account: string;
  filtername: string;
}

import { execute } from './index';

export default (param: DisableFilterParameters) => {
  return execute({
    function: 'disable_filter',
    parameters: param
  });
};
