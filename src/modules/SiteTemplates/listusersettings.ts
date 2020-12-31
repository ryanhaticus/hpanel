// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SiteTemplates%3A%3Alist_user_settings

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_user_settings'
  });
};
