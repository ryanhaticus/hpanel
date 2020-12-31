// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aget_available_applications
export interface getAvailableApplicationsParameters {
  nvarglistorarglist: number;
}

import { execute } from './index';

export default (param: getAvailableApplicationsParameters) => {
  return execute({
    function: 'get_available_applications',
    parameters: param
  });
};
