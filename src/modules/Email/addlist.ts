// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_list
export interface AddListParameters {
  list: string;
  password: string;
  domain: string;
  rebuildonly?: boolean;
  private?: boolean;
}

import { execute } from './index';

export default (param: AddListParameters) => {
  return execute({
    function: 'add_list',
    parameters: param
  });
};
