// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Afile
export interface fileParameters {
  file: number;
  needfile: boolean;
  skipdefault: boolean;
  checkmain: boolean;
  nomagic: boolean;
}

import { execute } from './index';

export default (param: fileParameters) => {
  return execute({
    function: 'file',
    parameters: param
  });
};
