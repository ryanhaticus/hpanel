// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Apasswd_list
export interface passwdListParameters {
  list?: number;
  password?: number;
}

import { execute } from './index';

export default (param?: passwdListParameters) => {
  return execute({
    function: 'passwd_list',
    parameters: param
  });
};
