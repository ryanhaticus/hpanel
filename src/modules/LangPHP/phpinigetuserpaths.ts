// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_ini_get_user_paths

import { execute } from './index';

export default () => {
  return execute({
    function: 'php_ini_get_user_paths'
  });
};
