// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Aupload_files

import { execute } from './index';

export default () => {
  return execute({
    function: 'upload_files',
  });
};
