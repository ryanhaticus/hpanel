// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_primary_ssl
export interface setPrimarySslParameters {
  servername?: number;
}

import { execute } from './index';

export default (param?: setPrimarySslParameters) => {
  return execute({
    function: 'set_primary_ssl',
    parameters: param
  });
};
