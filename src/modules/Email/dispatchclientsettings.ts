// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adispatch_client_settings
export interface DispatchClientSettingsParameters {
  to: string;
  account: string;
}

import { execute } from './index';

export default (param: DispatchClientSettingsParameters) => {
  return execute({
    function: 'dispatch_client_settings',
    parameters: param
  });
};
