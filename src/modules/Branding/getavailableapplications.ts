// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aget_available_applications
export interface GetAvailableApplicationsParameters {
  nvarglist?: string;
  arglist?: string;
}

import { execute } from './index';

export default (param?: GetAvailableApplicationsParameters) => {
  return execute({
    function: 'get_available_applications',
    parameters: param
  });
};
