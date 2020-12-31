// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aadd_mime
export interface addMimeParameters {
  type?: number;
  extension?: number;
}

import { execute } from './index';

export default (param?: addMimeParameters) => {
  return execute({
    function: 'add_mime',
    parameters: param
  });
};
