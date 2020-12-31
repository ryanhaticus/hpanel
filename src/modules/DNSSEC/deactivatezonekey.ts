// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Adeactivate_zone_key
export interface deactivateZoneKeyParameters {
  domain?: number;
  key_id?: number;
}

import { execute } from './index';

export default (param?: deactivateZoneKeyParameters) => {
  return execute({
    function: 'deactivate_zone_key',
    parameters: param
  });
};
