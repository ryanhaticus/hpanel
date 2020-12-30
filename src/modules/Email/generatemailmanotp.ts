// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Agenerate_mailman_otp
export interface GenerateMailmanOtpParameters {
  list: string;
}

import { execute } from './index';

export default (param: GenerateMailmanOtpParameters) => {
  return execute({
    function: 'generate_mailmain_otp',
    parameters: param
  });
};
