// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_scp_with_key
export interface fullbackupToScpWithKeyParameters {
  host?: number;
  port: number;
  key_name?: number;
  key_passphrase?: number;
  directory: number;
  email: number;
  dbbackup: number;
  dbbackup_mysql: number;
}

import { execute } from './index';

export default (param: fullbackupToScpWithKeyParameters) => {
  return execute({
    function: 'fullbackup_to_scp_with_key',
    parameters: param
  });
};
