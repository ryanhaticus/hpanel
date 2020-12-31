// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_scp_with_password
export interface fullbackupToScpWithPasswordParameters {
  host?: number;
  port: number;
  username?: number;
  password?: number;
  directory: number;
  email: number;
  dbbackup: number;
  dbbackup_mysql: number;
}

import { execute } from './index';

export default (param: fullbackupToScpWithPasswordParameters) => {
  return execute({
    function: 'fullbackup_to_scp_with_password',
    parameters: param
  });
};
