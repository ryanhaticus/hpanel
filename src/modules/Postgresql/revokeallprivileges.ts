// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Arevoke_all_privileges
export interface revokeAllPrivilegesParameters {
  user?: number;
  database?: number;
}

import { execute } from './index';

export default (param?: revokeAllPrivilegesParameters) => {
  return execute({
    function: 'revoke_all_privileges',
    parameters: param
  });
};
