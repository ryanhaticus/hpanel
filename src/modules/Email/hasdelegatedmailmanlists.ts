// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Ahas_delegated_mailman_lists
export interface HasDelegatedMailmanListsParameters {
  delegate: string;
}

import { execute } from './index';

export default (param: HasDelegatedMailmanListsParameters) => {
  return execute({
    function: 'has_delegated_mailman_lists',
    parameters: param
  });
};
