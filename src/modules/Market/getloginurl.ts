// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_login_url
export interface getLoginUrlParameters {
  provider?: number;
  url_after_login?: number;
}

import { execute } from './index';

export default (param?: getLoginUrlParameters) => {
  return execute({
    function: 'get_login_url',
    parameters: param
  });
};
