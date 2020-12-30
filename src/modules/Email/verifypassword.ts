// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Averify_password
export interface VerifyPasswordParameters {
  email: string;
  password: string;
}

import { execute } from './index';

export default (param: VerifyPasswordParameters) => {
  return execute({
    function: 'verify_password',
    parameters: param
  });
};
