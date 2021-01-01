// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Arepair_database
export interface repairDatabaseParameters {
  name: string;
}

import { execute } from './index';

export default (param: repairDatabaseParameters) => {
  return execute({
    function: 'repair_database',
    parameters: param,
  });
};
