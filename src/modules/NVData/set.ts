// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+NVData%3A%3Aset
export interface setParameters {
  names?: number;
  file?: number;
}

import { execute } from './index';

export default (param?: setParameters) => {
  return execute({
    function: 'set',
    parameters: param
  });
};
