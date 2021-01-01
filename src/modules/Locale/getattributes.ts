// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Locale%3A%3Aget_attributes

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_attributes',
  });
};
