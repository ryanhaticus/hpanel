// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryIndexes%3A%3Alist_directories
export interface listDirectoriesParameters {
  dir: string;
}

import { execute } from './index';

export default (param: listDirectoriesParameters) => {
  return execute({
    function: 'list_directories',
    parameters: param,
  });
};
