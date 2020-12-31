// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SiteTemplates%3A%3Alist_site_templates

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_site_templates'
  });
};
