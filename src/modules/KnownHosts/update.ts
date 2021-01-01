// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+KnownHosts%3A%3Aupdate
export interface updateParameters {
  host_name: string;
  port?: number;
}

import { execute } from './index';

export default (param: updateParameters) => {
  return execute({
    function: 'update',
    parameters: param,
  });
};
