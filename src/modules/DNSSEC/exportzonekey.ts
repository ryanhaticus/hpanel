// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aexport_zone_key
export interface exportZoneKeyParameters {
  domain?: number;
  key_id?: number;
}

import { execute } from './index';

export default (param?: exportZoneKeyParameters) => {
  return execute({
    function: 'export_zone_key',
    parameters: param
  });
};
