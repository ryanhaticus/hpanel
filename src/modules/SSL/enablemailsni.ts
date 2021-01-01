// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aenable_mail_sni
export interface enableMailSniParameters {
  domains: string;
}

import { execute } from './index';

export default (param: enableMailSniParameters) => {
  return execute({
    function: 'enable_mail_sni',
    parameters: param,
  });
};
