// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ImageManager%3A%3Acreate_thumbnails
export interface createThumbnailsParameters {
  dir?: number;
  width_percentage?: number;
  height_percentage?: number;
}

import { execute } from './index';

export default (param?: createThumbnailsParameters) => {
  return execute({
    function: 'create_thumbnails',
    parameters: param
  });
};
