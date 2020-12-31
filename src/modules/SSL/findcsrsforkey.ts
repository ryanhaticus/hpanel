// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Afind_csrs_for_key
export interface findCsrsForKeyParameters {
  id: number;
  friendly_name: number;
}

import { execute } from './index';

export default (param: findCsrsForKeyParameters) => {
  return execute({
    function: 'find_csrs_for_key',
    parameters: param
  });
};
