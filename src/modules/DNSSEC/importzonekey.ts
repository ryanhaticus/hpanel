// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aimport_zone_key
export interface importZoneKeyParameters {
  domain: string;
  key_type: string;
  key_data: string;
}

import { execute } from './index';

export default (param: importZoneKeyParameters) => {
  return execute({
    function: 'import_zone_key',
    parameters: param,
  });
};
