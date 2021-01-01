// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LangPHP%3A%3Aphp_set_vhost_versions
export interface phpSetVhostVersionsParameters {
  version: string;
  vhost: string;
}

import { execute } from './index';

export default (param: phpSetVhostVersionsParameters) => {
  return execute({
    function: 'php_set_vhost_versions',
    parameters: param,
  });
};
