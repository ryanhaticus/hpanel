// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Avalidate_current_dkims
export interface validateCurrentDkimsParameters {
  domain: string;
}

import { execute } from './index';

export default (param: validateCurrentDkimsParameters) => {
  return execute({
    function: 'validate_current_dkims',
    parameters: param,
  });
};
