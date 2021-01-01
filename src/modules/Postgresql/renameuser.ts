// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Arename_user
export interface renameUserParameters {
  oldname: string;
  newname: string;
  password: string;
}

import { execute } from './index';

export default (param: renameUserParameters) => {
  return execute({
    function: 'rename_user',
    parameters: param,
  });
};
