// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebDisk%3A%3Aset_password
export interface setPasswordParameters {
  user?: number;
  password?: number;
  enabledigest: boolean;
}

import { execute } from './index';

export default (param: setPasswordParameters) => {
  return execute({
    function: 'set_password',
    parameters: param
  });
};
