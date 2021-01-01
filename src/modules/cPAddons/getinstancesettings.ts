// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPAddons%3A%3Aget_instance_settings
export interface getInstanceSettingsParameters {
  unique_id: string;
}

import { execute } from './index';

export default (param: getInstanceSettingsParameters) => {
  return execute({
    function: 'get_instance_settings',
    parameters: param,
  });
};
