// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Alist_redirects
export interface listRedirectsParameters {
  regex: number;
}

import { execute } from './index';

export default (param: listRedirectsParameters) => {
  return execute({
    function: 'list_redirects',
    parameters: param
  });
};
