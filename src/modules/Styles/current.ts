// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Styles%3A%3Acurrent

import { execute } from './index';

export default () => {
  return execute({
    function: 'current'
  });
};
