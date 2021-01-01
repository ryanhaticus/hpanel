// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ainstalled_host
export interface installedHostParameters {
  domain?: string;
  verify_certificate?: boolean;
}

import { execute } from './index';

export default (param?: installedHostParameters) => {
  return execute({
    function: 'installed_host',
    parameters: param,
  });
};
