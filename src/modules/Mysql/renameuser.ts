// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Arename_user
export interface renameUserParameters {
  oldname?: number;
  newname?: number;
}

import { execute } from './index';

export default (param?: renameUserParameters) => {
  return execute({
    function: 'rename_user',
    parameters: param
  });
};
