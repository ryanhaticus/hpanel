// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebDisk%3A%3Aset_homedir
export interface setHomedirParameters {
  user?: number;
  homedir?: number;
  private: boolean;
}

import { execute } from './index';

export default (param: setHomedirParameters) => {
  return execute({
    function: 'set_homedir',
    parameters: param
  });
};
