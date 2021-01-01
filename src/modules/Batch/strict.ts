// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Batch%3A%3Astrict
export interface strictParameters {
  command: string;
}

import { execute } from './index';

export default (param: strictParameters) => {
  return execute({
    function: 'strict',
    parameters: param,
  });
};
