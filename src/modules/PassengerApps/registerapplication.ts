// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aregister_application
export interface registerApplicationParameters {
  name: string;
  path: string;
  domain: string;
  deployment_mode?: string;
  envvar_name?: string;
  envvar_value?: string;
  base_uri?: string;
  enabled?: boolean;
}

import { execute } from './index';

export default (param: registerApplicationParameters) => {
  return execute({
    function: 'register_application',
    parameters: param,
  });
};
