// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Aempty_trash

import { execute } from './index';

export default () => {
  return execute({
    function: 'empty_trash'
  });
};
