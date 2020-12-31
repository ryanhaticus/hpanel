// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Avalidate_login_token
export interface validateLoginTokenParameters {
  provider?: number;
  login_token?: number;
  url_after_login?: number;
}

import { execute } from './index';

export default (param?: validateLoginTokenParameters) => {
  return execute({
    function: 'validate_login_token',
    parameters: param
  });
};
