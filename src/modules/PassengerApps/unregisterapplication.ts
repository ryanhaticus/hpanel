// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aunregister_application
export interface unregisterApplicationParameters {
  name?: number;
}

import { execute } from './index';

export default (param?: unregisterApplicationParameters) => {
  return execute({
    function: 'unregister_application',
    parameters: param
  });
};
