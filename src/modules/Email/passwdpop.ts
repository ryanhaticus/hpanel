// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Apasswd_pop
export interface passwdPopParameters {
  email: string;
  password: string;
  domain?: string;
}

import { execute } from './index';

export default (param: passwdPopParameters) => {
  return execute({
    function: 'passwd_pop',
    parameters: param,
  });
};
