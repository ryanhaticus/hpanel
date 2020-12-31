// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_databases
export interface restoreDatabasesParameters {
  file: number;
  backup: number;
  verbose: boolean;
  timeout: number;
}

import { execute } from './index';

export default (param: restoreDatabasesParameters) => {
  return execute({
    function: 'restore_databases',
    parameters: param
  });
};
