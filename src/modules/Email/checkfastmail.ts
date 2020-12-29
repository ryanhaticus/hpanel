// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acheck_fastmail
export interface CheckFastmailParameters {}

import { execute } from './index';

export default (param: CheckFastmailParameters) => {
  return execute({
    function: 'check_fastmail',
    parameters: param
  });
};
