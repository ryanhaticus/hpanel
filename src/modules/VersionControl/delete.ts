// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControl%3A%3Adelete
export interface VCdeleteParameters {
  repository_root: string;
}

import { execute } from './index';

export default (param: VCdeleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param,
  });
};
