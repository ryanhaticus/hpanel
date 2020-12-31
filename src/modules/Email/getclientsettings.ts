// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_client_settings
export interface getClientSettingsParameters {
  account: number;
}

import { execute } from './index';

export default (param: getClientSettingsParameters) => {
  return execute({
    function: 'get_client_settings',
    parameters: param
  });
};
