// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aset_status
export interface SetStatusParameters {
  email: string;
  enabled: boolean;
}

import { execute } from './index';

export default (param: SetStatusParameters) => {
  return execute({
    function: 'set_status',
    parameters: param
  });
};
