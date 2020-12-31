// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Themes%3A%3Aupdate
export interface updateParameters {
  theme?: number;
}

import { execute } from './index';

export default (param?: updateParameters) => {
  return execute({
    function: 'update',
    parameters: param
  });
};
