// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Acheck_database
export interface checkDatabaseParameters {
  name?: number;
}

import { execute } from './index';

export default (param?: checkDatabaseParameters) => {
  return execute({
    function: 'check_database',
    parameters: param
  });
};
