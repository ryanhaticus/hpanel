// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+KnownHosts%3A%3Adelete
export interface deleteParameters {
  host_name?: number;
  port: number;
}

import { execute } from './index';

export default (param: deleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param
  });
};
