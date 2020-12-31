// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Akill_session
export interface killSessionParameters {
  login: number;
}

import { execute } from './index';

export default (param: killSessionParameters) => {
  return execute({
    function: 'kill_session',
    parameters: param
  });
};
