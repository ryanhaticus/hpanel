// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Arename_database
export interface renameDatabaseParameters {
  oldname: string;
  newname: string;
}

import { execute } from './index';

export default (param: renameDatabaseParameters) => {
  return execute({
    function: 'rename_database',
    parameters: param,
  });
};
