// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryPrivacy%3A%3Alist_users
export interface listUsersParameters {
  dir: string;
}

import { execute } from './index';

export default (param: listUsersParameters) => {
  return execute({
    function: 'list_users',
    parameters: param,
  });
};
