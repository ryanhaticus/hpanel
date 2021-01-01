// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aget_applications
export interface getApplicationsParameters {
  app_keys?: string;
}

import { execute } from './index';

export default (param?: getApplicationsParameters) => {
  return execute({
    function: 'get_applications',
    parameters: param,
  });
};
