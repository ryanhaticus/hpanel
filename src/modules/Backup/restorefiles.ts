// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Arestore_files
export interface restoreFilesParameters {
  backup: string;
  verbose?: boolean;
  directory?: string;
}

import { execute } from './index';

export default (param: restoreFilesParameters) => {
  return execute({
    function: 'restore_files',
    parameters: param,
  });
};
