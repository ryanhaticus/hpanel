// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_pops
export interface listPopsParameters {
  regex?: string;
  no_validate?: boolean;
  skip_main?: boolean;
}

import { execute } from './index';

export default (param?: listPopsParameters) => {
  return execute({
    function: 'list_pops',
    parameters: param,
  });
};
