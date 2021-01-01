// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+NVData%3A%3Aset
export interface setParameters {
  names: string;
  file: string;
}

import { execute } from './index';

export default (param: setParameters) => {
  return execute({
    function: 'set',
    parameters: param,
  });
};
