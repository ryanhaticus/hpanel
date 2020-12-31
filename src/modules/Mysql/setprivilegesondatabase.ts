// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aset_privileges_on_database
export interface setPrivilegesOnDatabaseParameters {
  user?: number;
  database?: number;
  privileges: number;
}

import { execute } from './index';

export default (param: setPrivilegesOnDatabaseParameters) => {
  return execute({
    function: 'set_privileges_on_database',
    parameters: param
  });
};
