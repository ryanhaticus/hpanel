// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aedit_application
export interface editApplicationParameters {
  name: string;
  new_name?: string;
  path?: string;
  domain?: string;
  deployment_mode?: string;
  envvar_name?: string;
  envvar_value?: string;
  clear_envvars?: boolean;
  enabled?: boolean;
}

import { execute } from './index';

export default (param: editApplicationParameters) => {
  return execute({
    function: 'edit_application',
    parameters: param,
  });
};
