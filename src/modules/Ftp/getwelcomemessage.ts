// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aget_welcome_message

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_welcome_message',
  });
};
