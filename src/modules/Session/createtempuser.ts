// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Session%3A%3Acreate_temp_user

import { execute } from './index';

export default () => {
  return execute({
    function: 'create_temp_user',
  });
};
