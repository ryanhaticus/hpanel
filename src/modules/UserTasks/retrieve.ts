// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserTasks%3A%3Aretrieve

import { execute } from './index';

export default () => {
  return execute({
    function: 'retrieve',
  });
};
