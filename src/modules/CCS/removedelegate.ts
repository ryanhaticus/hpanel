// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CCS%3A%3Aremove_delegate
export interface removeDelegateParameters {
  delegator?: number;
  delegatee?: number;
}

import { execute } from './index';

export default (param?: removeDelegateParameters) => {
  return execute({
    function: 'remove_delegate',
    parameters: param
  });
};
