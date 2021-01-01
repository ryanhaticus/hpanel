// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+TwoFactorAuth%3A%3Aset_user_configuration
export interface setUserConfigurationParameters {
  secret: string;
  tfa_token: number;
}

import { execute } from './index';

export default (param: setUserConfigurationParameters) => {
  return execute({
    function: 'set_user_configuration',
    parameters: param,
  });
};
