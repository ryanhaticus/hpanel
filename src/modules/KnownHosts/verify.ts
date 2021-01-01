// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+KnownHosts%3A%3Averify
export interface verifyParameters {
  host_name: string;
  port?: number;
}

import { execute } from './index';

export default (param: verifyParameters) => {
  return execute({
    function: 'verify',
    parameters: param,
  });
};
