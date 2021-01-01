// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Features%3A%3Alist_features

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_features',
  });
};
