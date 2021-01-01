// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Achange_admin_password
export interface changeAdminPasswordParameters {
  id: string;
  password: string;
}

import { execute } from './index';

export default (param: changeAdminPasswordParameters) => {
  return execute({
    function: 'change_admin_password',
    parameters: param,
  });
};
