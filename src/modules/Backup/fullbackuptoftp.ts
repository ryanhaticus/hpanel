// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_ftp
export interface fullbackupToFtpParameters {
  variant?: string;
  username: string;
  password: string;
  host: string;
  directory?: string;
  port?: number;
  email?: string;
  dbbackup?: string;
  dbbackup_mysql?: string;
}

import { execute } from './index';

export default (param: fullbackupToFtpParameters) => {
  return execute({
    function: 'fullbackup_to_ftp',
    parameters: param,
  });
};
