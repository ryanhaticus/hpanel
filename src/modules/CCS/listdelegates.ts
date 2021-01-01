// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CCS%3A%3Alist_delegates
export interface listDelegatesParameters {
  delegator?: string;
  delegatee?: string;
  readonly?: boolean;
}

import { execute } from './index';

export default (param?: listDelegatesParameters) => {
  return execute({
    function: 'list_delegates',
    parameters: param,
  });
};
