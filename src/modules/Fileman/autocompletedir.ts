// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Fileman%3A%3Aautocompletedir

import { execute } from './index';

export default () => {
  return execute({
    function: 'autocompletedir',
  });
};
