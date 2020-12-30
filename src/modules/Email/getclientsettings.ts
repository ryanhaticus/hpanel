// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_client_settings
export interface GetClientSettingsParameters {
  account: string;
}

import { execute } from './index';

export default (param: GetClientSettingsParameters) => {
  return execute({
    function: 'get_client_settings',
    parameters: param
  });
};
