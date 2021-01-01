// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Aupdate_privileges

import { execute } from './index';

export default () => {
  return execute({
    function: 'update_privileges',
  });
};
