// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Alist_mime
export interface listMimeParameters {
  type: string;
}

import { execute } from './index';

export default (param: listMimeParameters) => {
  return execute({
    function: 'list_mime',
    parameters: param,
  });
};
