// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryIndexes%3A%3Aget_indexing
export interface getIndexingParameters {
  dir?: number;
}

import { execute } from './index';

export default (param?: getIndexingParameters) => {
  return execute({
    function: 'get_indexing',
    parameters: param
  });
};
