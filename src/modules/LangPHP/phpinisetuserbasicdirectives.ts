// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_ini_set_user_basic_directives
export interface phpIniSetUserBasicDirectivesParameters {
  type: string;
  directive: string;
  vhost?: string;
}

import { execute } from './index';

export default (param: phpIniSetUserBasicDirectivesParameters) => {
  return execute({
    function: 'php_ini_set_user_basic_directives',
    parameters: param,
  });
};
