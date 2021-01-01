// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CCS%3A%3Aupdate_delegate
export interface updateDelegateParameters {
  delegator: string;
  delegatee: string;
  readonly?: boolean;
}

import { execute } from './index';

export default (param: updateDelegateParameters) => {
  return execute({
    function: 'update_delegate',
    parameters: param,
  });
};
