// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_get_vhost_versions

import { execute } from './index';

export default () => {
  return execute({
    function: 'php_get_vhost_versions',
  });
};
