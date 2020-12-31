// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aget_privileges_on_database
export interface getPrivilegesOnDatabaseParameters {
  user?: number;
  database?: number;
}

import { execute } from './index';

export default (param?: getPrivilegesOnDatabaseParameters) => {
  return execute({
    function: 'get_privileges_on_database',
    parameters: param
  });
};
