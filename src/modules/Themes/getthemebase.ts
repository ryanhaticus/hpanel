// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Themes%3A%3Aget_theme_base

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_theme_base'
  });
};
