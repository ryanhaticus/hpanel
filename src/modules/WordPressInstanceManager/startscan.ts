// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Astart_scan

import { execute } from './index';

export default () => {
  return execute({
    function: 'start_scan'
  });
};
