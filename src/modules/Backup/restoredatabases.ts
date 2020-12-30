// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_databases
export interface RestoreDatabasesParameters {
  file?: string;
  backup?: string;
  verbose?: boolean;
  timeout?: number;
}

import { execute } from './index';

export default (param?: RestoreDatabasesParameters) => {
  return execute({
    function: 'restore_databases',
    parameters: param
  });
};
