// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahas_delegated_mailman_lists
export interface hasDelegatedMailmanListsParameters {
  delegate?: number;
}

import { execute } from './index';

export default (param?: hasDelegatedMailmanListsParameters) => {
  return execute({
    function: 'has_delegated_mailman_lists',
    parameters: param
  });
};
