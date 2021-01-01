// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aremove_mailman_delegates
export interface removeMailmanDelegatesParameters {
  list: string;
  delegates: string;
}

import { execute } from './index';

export default (param: removeMailmanDelegatesParameters) => {
  return execute({
    function: 'remove_mailman_delegates',
    parameters: param,
  });
};
