// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Variables%3A%3Aget_user_information
export interface getUserInformationParameters {
  name: number;
}

import { execute } from './index';

export default (param: getUserInformationParameters) => {
  return execute({
    function: 'get_user_information',
    parameters: param
  });
};
