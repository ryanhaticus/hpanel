// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_spam_box
export interface DisableSpamBoxParameters {}

import { execute } from './index';

export default (param: DisableSpamBoxParameters) => {
  return execute({
    function: 'disable_spam_box',
    parameters: param
  });
};
