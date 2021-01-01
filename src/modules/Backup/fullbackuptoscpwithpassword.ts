// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_scp_with_password
export interface fullbackupToScpWithPasswordParameters {
  host: string;
  port?: number;
  username: string;
  password: string;
  directory?: string;
  email?: string;
  dbbackup?: string;
  dbbackup_mysql?: string;
}

import { execute } from './index';

export default (param: fullbackupToScpWithPasswordParameters) => {
  return execute({
    function: 'fullbackup_to_scp_with_password',
    parameters: param,
  });
};
