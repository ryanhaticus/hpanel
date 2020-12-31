// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Arevoke_access_to_database
export interface revokeAccessToDatabaseParameters {
  user?: number;
  database?: number;
}

import { execute } from './index';

export default (param?: revokeAccessToDatabaseParameters) => {
  return execute({
    function: 'revoke_access_to_database',
    parameters: param
  });
};
