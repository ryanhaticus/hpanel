// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ImageManager%3A%3Aresize_image
export interface resizeImageParameters {
  image_file?: number;
  width?: number;
  height?: number;
  save_original_as: number;
}

import { execute } from './index';

export default (param: resizeImageParameters) => {
  return execute({
    function: 'resize_image',
    parameters: param
  });
};
