// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Aenable_application
export interface enableApplicationParameters {
  name: string;
}

import { execute } from './index';

export default (param: enableApplicationParameters) => {
  return execute({
    function: 'enable_application',
    parameters: param,
  });
};
