// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aredirect_info
export interface redirectInfoParameters {
  url?: number;
  domain?: number;
}

import { execute } from './index';

export default (param?: redirectInfoParameters) => {
  return execute({
    function: 'redirect_info',
    parameters: param
  });
};
