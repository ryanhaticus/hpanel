// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ImageManager%3A%3Aget_dimensions
export interface getDimensionsParameters {
  image_file: string;
}

import { execute } from './index';

export default (param: getDimensionsParameters) => {
  return execute({
    function: 'get_dimensions',
    parameters: param,
  });
};
