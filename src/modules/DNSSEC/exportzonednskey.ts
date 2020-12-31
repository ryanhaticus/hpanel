// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Aexport_zone_dnskey
export interface exportZoneDnskeyParameters {
  domain?: number;
  key_id?: number;
}

import { execute } from './index';

export default (param?: exportZoneDnskeyParameters) => {
  return execute({
    function: 'export_zone_dnskey',
    parameters: param
  });
};
