// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_ini_get_user_content
export interface phpIniGetUserContentParameters {
  type: string;
  vhost?: string;
}

import { execute } from './index';

export default (param: phpIniGetUserContentParameters) => {
  return execute({
    function: 'php_ini_get_user_content',
    parameters: param,
  });
};
