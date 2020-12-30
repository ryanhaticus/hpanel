// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aset_always_accept
export interface SetAlwaysAcceptParameters {
  domain: string;
  mxcheck?: string;
  alwaysaccept?: string;
}

import { execute } from './index';

export default (param: SetAlwaysAcceptParameters) => {
  return execute({
    function: 'set_always_accept',
    parameters: param
  });
};
