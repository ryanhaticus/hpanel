// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Alist_routines
export interface listRoutinesParameters {
  database_user: number;
}

import { execute } from './index';

export default (param: listRoutinesParameters) => {
  return execute({
    function: 'list_routines',
    parameters: param
  });
};
