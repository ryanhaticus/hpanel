// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_filter
export interface EnableFilterParameters {
  account: string;
  filtername: string;
}

import { execute } from './index';

export default (param: EnableFilterParameters) => {
  return execute({
    function: 'enable_filter',
    parameters: param
  });
};
