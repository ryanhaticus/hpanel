// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_ini_get_user_basic_directives
export interface phpIniGetUserBasicDirectivesParameters {
  type?: number;
  vhost: number;
}

import { execute } from './index';

export default (param: phpIniGetUserBasicDirectivesParameters) => {
  return execute({
    function: 'php_ini_get_user_basic_directives',
    parameters: param
  });
};
