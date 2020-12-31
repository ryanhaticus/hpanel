// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserManager%3A%3Aunlink_service_account
export interface unlinkServiceAccountParameters {
  username?: number;
  domain?: number;
  service?: number;
  dismiss: boolean;
}

import { execute } from './index';

export default (param: unlinkServiceAccountParameters) => {
  return execute({
    function: 'unlink_service_account',
    parameters: param
  });
};
