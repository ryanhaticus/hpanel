// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Tokens%3A%3Arename
export interface renameParameters {
  name: string;
  new_name: string;
}

import { execute } from './index';

export default (param: renameParameters) => {
  return execute({
    function: 'rename',
    parameters: param,
  });
};
