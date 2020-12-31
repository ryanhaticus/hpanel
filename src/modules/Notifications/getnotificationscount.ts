// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Notifications%3A%3Aget_notifications_count

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_notifications_count'
  });
};
