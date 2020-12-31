// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LogManager%3A%3Alist_archives

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_archives'
  });
};
