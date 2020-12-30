// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Batch%3A%3Astrict
export interface StrictParameters {
  command: string;
}

import { execute } from './index';

export default (param: StrictParameters) => {
  return execute({
    function: 'strict',
    parameters: param
  });
};
