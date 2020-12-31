// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControlDeployment%3A%3Acreate
export interface createParameters {
  repository_root?: number;
}

import { execute } from './index';

export default (param?: createParameters) => {
  return execute({
    function: 'create',
    parameters: param
  });
};
