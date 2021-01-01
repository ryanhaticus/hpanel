// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_welcome_message
export interface setWelcomeMessageParameters {
  message: string;
}

import { execute } from './index';

export default (param: setWelcomeMessageParameters) => {
  return execute({
    function: 'set_welcome_message',
    parameters: param,
  });
};
