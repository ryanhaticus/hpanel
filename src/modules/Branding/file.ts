// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Afile
export interface FileParameters {
  file?: string;
  needfile?: boolean;
  skipdefault?: boolean;
  checkmain?: boolean;
  nomagic?: boolean;
}

import { execute } from './index';

export default (param?: FileParameters) => {
  return execute({
    function: 'file',
    parameters: param
  });
};
