// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Alist_users
export interface listUsersParameters {
  flat: boolean;
}

import { execute } from './index';

export default (param: listUsersParameters) => {
  return execute({
    function: 'list_users',
    parameters: param
  });
};
