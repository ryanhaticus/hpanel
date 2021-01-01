// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aremove_zone_key
export interface removeZoneKeyParameters {
  domain: string;
  key_id: number;
}

import { execute } from './index';

export default (param: removeZoneKeyParameters) => {
  return execute({
    function: 'remove_zone_key',
    parameters: param,
  });
};
