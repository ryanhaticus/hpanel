// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aset_status
export interface setStatusParameters {
  email: string;
  enabled: boolean;
}

import { execute } from './index';

export default (param: setStatusParameters) => {
  return execute({
    function: 'set_status',
    parameters: param,
  });
};
