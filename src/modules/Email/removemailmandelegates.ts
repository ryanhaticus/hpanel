// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aremove_mailman_delegates
export interface RemoveMailmanDelegatesParameters {
  list: string;
  delegates: string;
}

import { execute } from './index';

export default (param: RemoveMailmanDelegatesParameters) => {
  return execute({
    function: 'remove_mailman_delegates',
    parameters: param
  });
};
