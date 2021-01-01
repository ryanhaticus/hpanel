// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Variables%3A%3Aget_server_information
export interface getServerInformationParameters {
  name?: string;
}

import { execute } from './index';

export default (param?: getServerInformationParameters) => {
  return execute({
    function: 'get_server_information',
    parameters: param,
  });
};
