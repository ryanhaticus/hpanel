// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_scp_with_key
export interface FullbackupToScpWithKeyParameters {
  host: string;
  port?: number;
  key_name: string;
  key_passphrase: string;
  directory?: string;
  email?: string;
  dbbackup?: string;
  dbbackup_mysql?: string;
}

import { execute } from './index';

export default (param: FullbackupToScpWithKeyParameters) => {
  return execute({
    function: 'fullbackup_to_scp_with_key',
    parameters: param
  });
};
