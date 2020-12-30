// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_auto_responder
export interface GetAutoResponderParameters {
  email: string;
  temp_charset?: string;
}

import { execute } from './index';

export default (param: GetAutoResponderParameters) => {
  return execute({
    function: 'get_auto_responder',
    parameters: param
  });
};
