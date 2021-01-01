// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Adelete_database
export interface deleteDatabaseParameters {
  name: string;
}

import { execute } from './index';

export default (param: deleteDatabaseParameters) => {
  return execute({
    function: 'delete_database',
    parameters: param,
  });
};
