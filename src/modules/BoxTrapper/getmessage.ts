// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_message
export interface getMessageParameters {
  email: string;
  queuefile: string;
}

import { execute } from './index';

export default (param: getMessageParameters) => {
  return execute({
    function: 'get_message',
    parameters: param,
  });
};
