// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Avalidate_current_ptrs
export interface validateCurrentPtrsParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: validateCurrentPtrsParameters) => {
  return execute({
    function: 'validate_current_ptrs',
    parameters: param
  });
};
