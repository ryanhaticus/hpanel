// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Alist_applications

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_applications',
  });
};
