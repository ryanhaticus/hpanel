// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryPrivacy%3A%3Ais_directory_protected
export interface isDirectoryProtectedParameters {
  dir?: number;
}

import { execute } from './index';

export default (param?: isDirectoryProtectedParameters) => {
  return execute({
    function: 'is_directory_protected',
    parameters: param
  });
};
