// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_spam_autodelete
export interface DisableSpamAutodeleteParameters {}

import { execute } from './index';

export default (param: DisableSpamAutodeleteParameters) => {
  return execute({
    function: 'disable_spam_autodelete',
    parameters: param
  });
};
