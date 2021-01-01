// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_ini_set_user_content
export interface phpIniSetUserContentParameters {
  type: string;
  content: string;
  vhost?: string;
}

import { execute } from './index';

export default (param: phpIniSetUserContentParameters) => {
  return execute({
    function: 'php_ini_set_user_content',
    parameters: param,
  });
};
