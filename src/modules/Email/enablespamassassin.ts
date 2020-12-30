// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_spam_assassin
export interface EnableSpamAssassinParameters {
  email: string;
}

import { execute } from './index';

export default (param: EnableSpamAssassinParameters) => {
  return execute({
    function: 'enable_spam_assassin',
    parameters: param
  });
};
