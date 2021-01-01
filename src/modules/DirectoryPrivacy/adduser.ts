// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryPrivacy%3A%3Aadd_user
export interface addUserParameters {
  dir: string;
  user: string;
  password: string;
}

import { execute } from './index';

export default (param: addUserParameters) => {
  return execute({
    function: 'add_user',
    parameters: param,
  });
};
