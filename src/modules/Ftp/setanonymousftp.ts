// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_anonymous_ftp
export interface setAnonymousFtpParameters {
  set: boolean;
}

import { execute } from './index';

export default (param: setAnonymousFtpParameters) => {
  return execute({
    function: 'set_anonymous_ftp',
    parameters: param,
  });
};
