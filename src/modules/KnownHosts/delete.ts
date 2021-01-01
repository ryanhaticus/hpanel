// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+KnownHosts%3A%3Adelete
export interface KHdeleteParameters {
  host_name: string;
  port?: number;
}

import { execute } from './index';

export default (param: KHdeleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param,
  });
};
