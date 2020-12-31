// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_pops_with_disk
export interface listPopsWithDiskParameters {
  domain: number;
  email: number;
  get_restrictions: boolean;
  infinityimg: number;
  infinitylang: boolean;
  maxaccounts: number;
  no_disk: boolean;
  no_validate: boolean;
  regex: number;
}

import { execute } from './index';

export default (param: listPopsWithDiskParameters) => {
  return execute({
    function: 'list_pops_with_disk',
    parameters: param
  });
};
