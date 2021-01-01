// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_mailman_delegates
export interface getMailmanDelegatesParameters {
  list: string;
}

import { execute } from './index';

export default (param: getMailmanDelegatesParameters) => {
  return execute({
    function: 'get_mailman_delegates',
    parameters: param,
  });
};
