// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Apasswd
export interface passwdParameters {
  domain: number;
  user?: number;
  pass?: number;
}

import { execute } from './index';

export default (param: passwdParameters) => {
  return execute({
    function: 'passwd',
    parameters: param
  });
};
