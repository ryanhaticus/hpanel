// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Aget_file_content

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_file_content',
  });
};
