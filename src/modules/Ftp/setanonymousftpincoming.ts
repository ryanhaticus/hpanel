// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_anonymous_ftp_incoming
export interface setAnonymousFtpIncomingParameters {
  set: boolean;
}

import { execute } from './index';

export default (param: setAnonymousFtpIncomingParameters) => {
  return execute({
    function: 'set_anonymous_ftp_incoming',
    parameters: param,
  });
};
