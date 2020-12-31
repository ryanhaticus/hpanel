// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Acheck_account_conflicts
export interface checkAccountConflictsParameters {
  full_username?: number;
}

import { execute } from './index';

export default (param?: checkAccountConflictsParameters) => {
  return execute({
    function: 'check_account_conflicts',
    parameters: param
  });
};
