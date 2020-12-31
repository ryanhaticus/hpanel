// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SpamAssassin%3A%3Aget_user_preferences

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_user_preferences'
  });
};
