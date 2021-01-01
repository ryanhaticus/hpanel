// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Styles%3A%3Aset_default
export interface setDefaultParameters {
  type: string;
  name: string;
}

import { execute } from './index';

export default (param: setDefaultParameters) => {
  return execute({
    function: 'set_default',
    parameters: param,
  });
};
