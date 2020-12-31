// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControl%3A%3Acreate
export interface createParameters {
  type?: number;
  name?: number;
  repository_root?: number;
  source_repository: number;
  remote_name: number;
  url: number;
}

import { execute } from './index';

export default (param: createParameters) => {
  return execute({
    function: 'create',
    parameters: param
  });
};
