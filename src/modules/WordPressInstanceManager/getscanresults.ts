// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Aget_scan_results

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_scan_results',
  });
};
