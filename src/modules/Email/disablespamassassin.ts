// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adisable_spam_assassin

import { execute } from './index';

export default () => {
  return execute({
    function: 'disable_spam_assassin'
  });
};
