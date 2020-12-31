// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aadd_ftp
export interface addFtpParameters {
  user?: number;
  pass?: number;
  homedir: number;
  quota: number;
  disallowdot: boolean;
  domain: number;
  pass_hash: number;
}

import { execute } from './index';

export default (param: addFtpParameters) => {
  return execute({
    function: 'add_ftp',
    parameters: param
  });
};
