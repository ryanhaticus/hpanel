// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Averify_password
export interface verifyPasswordParameters {
  email?: number;
  password?: number;
}

import { execute } from './index';

export default (param?: verifyPasswordParameters) => {
  return execute({
    function: 'verify_password',
    parameters: param
  });
};
