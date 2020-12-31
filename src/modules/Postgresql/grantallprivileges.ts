// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Agrant_all_privileges
export interface grantAllPrivilegesParameters {
  user?: number;
  database?: number;
}

import { execute } from './index';

export default (param?: grantAllPrivilegesParameters) => {
  return execute({
    function: 'grant_all_privileges',
    parameters: param
  });
};
