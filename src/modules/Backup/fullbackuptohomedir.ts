// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_homedir
export interface fullbackupToHomedirParameters {
  email?: string;
  dbbackup?: string;
  dbbackup_mysql?: string;
}

import { execute } from './index';

export default (param?: fullbackupToHomedirParameters) => {
  return execute({
    function: 'fullbackup_to_homedir',
    parameters: param,
  });
};
