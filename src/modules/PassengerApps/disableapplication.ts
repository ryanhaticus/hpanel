// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+PassengerApps%3A%3Adisable_application
export interface disableApplicationParameters {
  name?: number;
}

import { execute } from './index';

export default (param?: disableApplicationParameters) => {
  return execute({
    function: 'disable_application',
    parameters: param
  });
};
