// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Aget_api_version

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_api_version'
  });
};
