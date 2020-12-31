// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aget_cabundle
export interface getCabundleParameters {
  cert?: number;
}

import { execute } from './index';

export default (param?: getCabundleParameters) => {
  return execute({
    function: 'get_cabundle',
    parameters: param
  });
};
