// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_pops_with_disk
export interface ListPopsWithDiskParameters {
  domain?: string;
  email?: string;
  get_restrictions?: boolean;
  infinityimg?: string;
  infinitylang?: boolean;
  maxaccounts?: number;
  no_disk?: boolean;
  no_validate?: boolean;
  regex?: string;
}

import { execute } from './index';

export default (param: ListPopsWithDiskParameters) => {
  return execute({
    function: 'list_pops_with_disk',
    parameters: param
  });
};
