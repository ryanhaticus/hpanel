// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_spam_assassin
export interface DisableSpamAssassinParameters {
  email: string;
}

import { execute } from './index';

export default (param: DisableSpamAssassinParameters) => {
  return execute({
    function: 'disable_spam_assassin',
    parameters: param
  });
};
