// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Adisable_dnssec
export interface disableDnssecParameters {
  domain: string;
}

import { execute } from './index';

export default (param: disableDnssecParameters) => {
  return execute({
    function: 'disable_dnssec',
    parameters: param,
  });
};
