// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+KnownHosts%3A%3Acreate
export interface createParameters {
  host_name: string;
  port?: number;
}

import { execute } from './index';

export default (param: createParameters) => {
  return execute({
    function: 'create',
    parameters: param,
  });
};
