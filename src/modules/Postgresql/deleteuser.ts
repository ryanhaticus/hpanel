// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Adelete_user
export interface deleteUserParameters {
  name: string;
}

import { execute } from './index';

export default (param: deleteUserParameters) => {
  return execute({
    function: 'delete_user',
    parameters: param,
  });
};
