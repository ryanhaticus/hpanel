// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_list
export interface deleteListParameters {
  list: string;
}

import { execute } from './index';

export default (param: deleteListParameters) => {
  return execute({
    function: 'delete_list',
    parameters: param,
  });
};
