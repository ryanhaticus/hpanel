// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Avalidate_current_spfs
export interface validateCurrentSpfsParameters {
  domain: string;
}

import { execute } from './index';

export default (param: validateCurrentSpfsParameters) => {
  return execute({
    function: 'validate_current_spfs',
    parameters: param,
  });
};
