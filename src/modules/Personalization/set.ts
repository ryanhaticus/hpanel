// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Personalization%3A%3Aset
export interface setParameters {
  personalization?: number;
}

import { execute } from './index';

export default (param?: setParameters) => {
  return execute({
    function: 'set',
    parameters: param
  });
};
