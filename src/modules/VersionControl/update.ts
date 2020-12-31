// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControl%3A%3Aupdate
export interface updateParameters {
  repository_root?: number;
  name: number;
  branch: number;
  source_repository: number;
  remote_name: number;
}

import { execute } from './index';

export default (param: updateParameters) => {
  return execute({
    function: 'update',
    parameters: param
  });
};
