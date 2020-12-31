// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adelete_ssl
export interface deleteSslParameters {
  domain?: number;
}

import { execute } from './index';

export default (param?: deleteSslParameters) => {
  return execute({
    function: 'delete_ssl',
    parameters: param
  });
};
