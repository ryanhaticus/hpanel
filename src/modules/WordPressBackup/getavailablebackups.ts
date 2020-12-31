// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Aget_available_backups
export interface getAvailableBackupsParameters {
  site?: number;
}

import { execute } from './index';

export default (param?: getAvailableBackupsParameters) => {
  return execute({
    function: 'get_available_backups',
    parameters: param
  });
};
