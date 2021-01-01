// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPAddons%3A%3Alist_addon_instances
export interface listAddonInstancesParameters {
  addon?: string;
}

import { execute } from './index';

export default (param?: listAddonInstancesParameters) => {
  return execute({
    function: 'list_addon_instances',
    parameters: param,
  });
};
