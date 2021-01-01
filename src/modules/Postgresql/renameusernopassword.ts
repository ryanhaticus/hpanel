// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Arename_user_no_password
export interface renameUserNoPasswordParameters {
  oldname: string;
  newname: string;
}

import { execute } from './index';

export default (param: renameUserNoPasswordParameters) => {
  return execute({
    function: 'rename_user_no_password',
    parameters: param,
  });
};
