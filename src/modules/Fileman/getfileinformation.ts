// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Aget_file_information

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_file_information'
  });
};
