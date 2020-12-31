// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aset_always_accept
export interface setAlwaysAcceptParameters {
  domain?: number;
  mxcheck: number;
  alwaysaccept: number;
}

import { execute } from './index';

export default (param: setAlwaysAcceptParameters) => {
  return execute({
    function: 'set_always_accept',
    parameters: param
  });
};
