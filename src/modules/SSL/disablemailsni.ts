// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Adisable_mail_sni
export interface disableMailSniParameters {
  domains?: number;
}

import { execute } from './index';

export default (param?: disableMailSniParameters) => {
  return execute({
    function: 'disable_mail_sni',
    parameters: param
  });
};
