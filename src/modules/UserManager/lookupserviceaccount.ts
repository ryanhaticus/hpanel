// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Alookup_service_account
export interface lookupServiceAccountParameters {
  type: string;
  full_username: string;
}

import { execute } from './index';

export default (param: lookupServiceAccountParameters) => {
  return execute({
    function: 'lookup_service_account',
    parameters: param,
  });
};
