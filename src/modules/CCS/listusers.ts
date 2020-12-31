// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CCS%3A%3Alist_users
export interface listUsersParameters {
  account: number;
}

import { execute } from './index';

export default (param: listUsersParameters) => {
  return execute({
    function: 'list_users',
    parameters: param
  });
};
