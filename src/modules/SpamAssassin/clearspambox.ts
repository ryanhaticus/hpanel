// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SpamAssassin%3A%3Aclear_spam_box

import { execute } from './index';

export default () => {
  return execute({
    function: 'clear_spam_box'
  });
};
