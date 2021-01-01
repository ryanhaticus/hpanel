// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Alist_hotlinks

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_hotlinks',
  });
};
