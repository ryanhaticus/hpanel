// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aget_information_for_applications
export interface getInformationForApplicationsParameters {
  docroot?: number;
  app_keys: number;
}

import { execute } from './index';

export default (param: getInformationForApplicationsParameters) => {
  return execute({
    function: 'get_information_for_applications',
    parameters: param
  });
};
