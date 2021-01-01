// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Adelete_redirect
export interface deleteRedirectParameters {
  domain: string;
  docroot?: string;
  src?: string;
  args?: string;
}

import { execute } from './index';

export default (param: deleteRedirectParameters) => {
  return execute({
    function: 'delete_redirect',
    parameters: param,
  });
};
