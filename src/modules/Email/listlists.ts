// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_lists
export interface ListListsParameters {
  regex?: string;
  domain?: string;
}

import { execute } from './index';

export default (param: ListListsParameters) => {
  return execute({
    function: 'list_lists',
    parameters: param
  });
};
