// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Adelete_user
export interface deleteUserParameters {
  username: string;
  domain: string;
}

import { execute } from './index';

export default (param: deleteUserParameters) => {
  return execute({
    function: 'delete_user',
    parameters: param,
  });
};
