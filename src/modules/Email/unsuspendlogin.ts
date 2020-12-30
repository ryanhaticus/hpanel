// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aunsuspend_login
export interface UnsuspendLoginParameters {
  email?: string;
}

import { execute } from './index';

export default (param?: UnsuspendLoginParameters) => {
  return execute({
    function: 'unsuspend_login',
    parameters: param
  });
};
