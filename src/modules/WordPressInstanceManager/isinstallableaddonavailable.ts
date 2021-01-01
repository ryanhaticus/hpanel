// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Ais_installable_addon_available

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_installable_addon_available',
  });
};
