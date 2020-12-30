// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_spam_box

import { execute } from './index';

export default () => {
  return execute({
    function: 'enable_spam_box'
  });
};
