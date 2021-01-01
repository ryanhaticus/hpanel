// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControlDeployment%3A%3Adelete
export interface VCDdeleteParameters {
  deploy_id: string;
}

import { execute } from './index';

export default (param: VCDdeleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param,
  });
};
