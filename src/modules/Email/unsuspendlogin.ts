// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aunsuspend_login
export interface unsuspendLoginParameters {
  email: number;
}

import { execute } from './index';

export default (param: unsuspendLoginParameters) => {
  return execute({
    function: 'unsuspend_login',
    parameters: param
  });
};
