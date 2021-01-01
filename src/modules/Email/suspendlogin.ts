// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Asuspend_login
export interface suspendLoginParameters {
  email: string;
}

import { execute } from './index';

export default (param: suspendLoginParameters) => {
  return execute({
    function: 'suspend_login',
    parameters: param,
  });
};
