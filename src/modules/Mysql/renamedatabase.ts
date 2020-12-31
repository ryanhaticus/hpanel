// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Arename_database
export interface renameDatabaseParameters {
  oldname?: number;
  newname?: number;
}

import { execute } from './index';

export default (param?: renameDatabaseParameters) => {
  return execute({
    function: 'rename_database',
    parameters: param
  });
};
