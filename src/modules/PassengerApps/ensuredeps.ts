// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aensure_deps
export interface ensureDepsParameters {
  type?: number;
  app_path?: number;
}

import { execute } from './index';

export default (param?: ensureDepsParameters) => {
  return execute({
    function: 'ensure_deps',
    parameters: param
  });
};
