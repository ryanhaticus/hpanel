// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CCS%3A%3Aadd_delegate
export interface addDelegateParameters {
  delegator?: number;
  delegatee?: number;
  readonly: boolean;
}

import { execute } from './index';

export default (param: addDelegateParameters) => {
  return execute({
    function: 'add_delegate',
    parameters: param
  });
};
