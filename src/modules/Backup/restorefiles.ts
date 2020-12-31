// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_files
export interface restoreFilesParameters {
  backup?: number;
  verbose: boolean;
  directory: number;
}

import { execute } from './index';

export default (param: restoreFilesParameters) => {
  return execute({
    function: 'restore_files',
    parameters: param
  });
};
