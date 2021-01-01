// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Session%3A%3Acreate_webmail_session_for_mail_user
export interface createWebmailSessionForMailUserParameters {
  login: string;
  domain: string;
  locale?: string;
  remote_address?: string;
}

import { execute } from './index';

export default (param: createWebmailSessionForMailUserParameters) => {
  return execute({
    function: 'create_webmail_session_for_mail_user',
    parameters: param,
  });
};
