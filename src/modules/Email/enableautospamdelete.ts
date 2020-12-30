// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_spam_autodelete
export interface EnableSpamAutodeleteParameters {}

import { execute } from './index';

export default (param: EnableSpamAutodeleteParameters) => {
  return execute({
    function: 'enable_spam_autodelete',
    parameters: param
  });
};
