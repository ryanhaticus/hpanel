// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aedit_application
export interface editApplicationParameters {
  name?: number;
  new_name: number;
  path: number;
  domain: number;
  deployment_mode: number;
  envvar_name: number;
  envvar_value: number;
  clear_envvars: boolean;
  enabled: boolean;
}

import { execute } from './index';

export default (param: editApplicationParameters) => {
  return execute({
    function: 'edit_application',
    parameters: param
  });
};
