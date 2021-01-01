// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aset_ssl_share
export interface setSslShareParameters {
  enable: boolean;
}

import { execute } from './index';

export default (param: setSslShareParameters) => {
  return execute({
    function: 'set_ssl_share',
    parameters: param,
  });
};
