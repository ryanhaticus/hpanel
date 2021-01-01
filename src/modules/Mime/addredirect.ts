// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aadd_redirect
export interface addRedirectParameters {
  domain: string;
  src?: string;
  redirect: string;
  type?: string;
  redirect_wildcard?: boolean;
  redirect_www?: number;
}

import { execute } from './index';

export default (param: addRedirectParameters) => {
  return execute({
    function: 'add_redirect',
    parameters: param,
  });
};
