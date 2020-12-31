// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Restore%3A%3Arestore_file
export interface restoreFileParameters {
  backupID?: number;
  path?: number;
  overwrite?: boolean;
  fullpath?: number;
}

import { execute } from './index';

export default (param?: restoreFileParameters) => {
  return execute({
    function: 'restore_file',
    parameters: param
  });
};
