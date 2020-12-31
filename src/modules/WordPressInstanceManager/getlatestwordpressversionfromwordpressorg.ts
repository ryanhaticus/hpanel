// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Aget_latest_wordpress_version_from_wordpress_org
export interface getLatestWordpressVersionFromWordpressOrgParameters {
  force: boolean;
  cache_time: number;
}

import { execute } from './index';

export default (param: getLatestWordpressVersionFromWordpressOrgParameters) => {
  return execute({
    function: 'get_latest_wordpress_version_from_wordpress_org',
    parameters: param
  });
};
