// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aactivate_zone_key
export interface activateZoneKeyParameters {
  domain: string;
  key_id: number;
}

import { execute } from './index';

export default (param: activateZoneKeyParameters) => {
  return execute({
    function: 'activate_zone_key',
    parameters: param,
  });
};
