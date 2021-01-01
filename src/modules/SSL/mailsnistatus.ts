// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Amail_sni_status
export interface mailSniStatusParameters {
  domain: string;
}

import { execute } from './index';

export default (param: mailSniStatusParameters) => {
  return execute({
    function: 'mail_sni_status',
    parameters: param,
  });
};
