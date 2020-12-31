// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aregister_application
export interface registerApplicationParameters {
  name?: number;
  path?: number;
  domain?: number;
  deployment_mode: number;
  envvar_name: number;
  envvar_value: number;
  base_uri: number;
  enabled: boolean;
}

import { execute } from './index';

export default (param: registerApplicationParameters) => {
  return execute({
    function: 'register_application',
    parameters: param
  });
};
