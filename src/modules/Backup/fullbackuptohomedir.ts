// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_tto_homedir
export interface FullbackupToHomedirParameters {
  email?: string;
  dbbackup?: string;
  dbbackup_mysql?: string;
}

import { execute } from './index';

export default (param?: FullbackupToHomedirParameters) => {
  return execute({
    function: 'fullbackup_to_homedir',
    parameters: param
  });
};
