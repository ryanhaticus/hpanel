// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+NVData%3A%3Aget
export interface getParameters {
  names: string;
}

import { execute } from './index';

export default (param: getParameters) => {
  return execute({
    function: 'get',
    parameters: param,
  });
};
