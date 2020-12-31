// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Agenerate_mailman_otp
export interface generateMailmanOtpParameters {
  list?: number;
}

import { execute } from './index';

export default (param?: generateMailmanOtpParameters) => {
  return execute({
    function: 'generate_mailman_otp',
    parameters: param
  });
};
