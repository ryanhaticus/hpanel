// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aadd_ftp
export interface addFtpParameters {
  user: string;
  pass: string;
  homedir?: string;
  quota?: number;
  disallowdot?: boolean;
  domain?: string;
  pass_hash?: string;
}

import { execute } from './index';

export default (param: addFtpParameters) => {
  return execute({
    function: 'add_ftp',
    parameters: param,
  });
};
