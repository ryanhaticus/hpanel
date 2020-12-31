// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Pushbullet%3A%3Asend_test_message
export interface sendTestMessageParameters {
  access_token?: number;
}

import { execute } from './index';

export default (param?: sendTestMessageParameters) => {
  return execute({
    function: 'send_test_message',
    parameters: param
  });
};
