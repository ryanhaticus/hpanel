// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_spam_assassin

import { execute } from './index';

export default () => {
  return execute({
    function: 'enable_spam_assassin',
  });
};
