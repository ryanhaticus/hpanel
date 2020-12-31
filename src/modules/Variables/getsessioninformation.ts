// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Variables%3A%3Aget_session_information
export interface getSessionInformationParameters {
  name: number;
}

import { execute } from './index';

export default (param: getSessionInformationParameters) => {
  return execute({
    function: 'get_session_information',
    parameters: param
  });
};
