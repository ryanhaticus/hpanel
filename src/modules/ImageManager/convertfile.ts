// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ImageManager%3A%3Aconvert_file
export interface convertFileParameters {
  image_file?: number;
  type?: number;
}

import { execute } from './index';

export default (param?: convertFileParameters) => {
  return execute({
    function: 'convert_file',
    parameters: param
  });
};
