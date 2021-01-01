// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Acreate_user
export interface createUserParameters {
  name: string;
  password: string;
}

import { execute } from './index';

export default (param: createUserParameters) => {
  return execute({
    function: 'create_user',
    parameters: param,
  });
};
