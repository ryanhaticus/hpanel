// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Restore%3A%3Aquery_file_info
export interface queryFileInfoParameters {
  path?: number;
  fullpath?: number;
  exists: boolean;
}

import { execute } from './index';

export default (param: queryFileInfoParameters) => {
  return execute({
    function: 'query_file_info',
    parameters: param
  });
};
