// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Styles%3A%3Aupdate
export interface updateParameters {
  type?: number;
  name?: number;
}

import { execute } from './index';

export default (param?: updateParameters) => {
  return execute({
    function: 'update',
    parameters: param
  });
};
