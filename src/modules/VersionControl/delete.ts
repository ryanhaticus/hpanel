// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControl%3A%3Adelete
export interface deleteParameters {
  repository_root?: number;
}

import { execute } from './index';

export default (param?: deleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param
  });
};
