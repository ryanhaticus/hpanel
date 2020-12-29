// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_mailman_delegates
export interface AddMailmanDelegatesParameters {
  list: string;
  delegates: string;
}

import { execute } from './index';

export default (param: AddMailmanDelegatesParameters) => {
  return execute({
    function: 'add_mailman_delegates',
    parameters: param
  });
};
