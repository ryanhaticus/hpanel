// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+GPG%3A%3Aimport_key
export interface importKeyParameters {
  key_data?: number;
}

import { execute } from './index';

export default (param?: importKeyParameters) => {
  return execute({
    function: 'import_key',
    parameters: param
  });
};
