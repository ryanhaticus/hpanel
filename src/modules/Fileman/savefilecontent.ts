// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Asave_file_content

import { execute } from './index';

export default () => {
  return execute({
    function: 'save_file_content'
  });
};
