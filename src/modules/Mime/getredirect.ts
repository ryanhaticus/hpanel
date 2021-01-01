// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aget_redirect
export interface getRedirectParameters {
  domain: string;
}

import { execute } from './index';

export default (param: getRedirectParameters) => {
  return execute({
    function: 'get_redirect',
    parameters: param,
  });
};
