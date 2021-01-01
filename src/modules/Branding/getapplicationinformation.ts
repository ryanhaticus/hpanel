// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aget_application_information
export interface getApplicationInformationParameters {
  app_key: string;
}

import { execute } from './index';

export default (param: getApplicationInformationParameters) => {
  return execute({
    function: 'get_application_information',
    parameters: param,
  });
};
