// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Personalization%3A%3Aget
export interface getParameters {
  names?: number;
}

import { execute } from './index';

export default (param?: getParameters) => {
  return execute({
    function: 'get',
    parameters: param
  });
};
