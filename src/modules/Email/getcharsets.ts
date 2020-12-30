// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_charsets
export interface GetCharsetsParameters {}

import { execute } from './index';

export default (param: GetCharsetsParameters) => {
  return execute({
    function: 'get_charsets',
    parameters: param
  });
};
