// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Asuspend_login
export interface SuspendLoginParameters {
  email: string;
}

import { execute } from './index';

export default (param: SuspendLoginParameters) => {
  return execute({
    function: 'suspend_login',
    parameters: param
  });
};
