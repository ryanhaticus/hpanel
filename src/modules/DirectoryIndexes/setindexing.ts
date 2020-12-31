// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryIndexes%3A%3Aset_indexing
export interface setIndexingParameters {
  dir?: number;
  type?: number;
}

import { execute } from './index';

export default (param?: setIndexingParameters) => {
  return execute({
    function: 'set_indexing',
    parameters: param
  });
};
