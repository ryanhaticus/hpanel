// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Session%3A%3Acreate_webmail_session_for_mail_user_check_password
export interface createWebmailSessionForMailUserCheckPasswordParameters {
  login: string;
  domain: string;
  password: string;
  locale?: string;
  remote_address?: string;
}

import { execute } from './index';

export default (
  param: createWebmailSessionForMailUserCheckPasswordParameters
) => {
  return execute({
    function: 'create_webmail_session_for_mail_user_check_password',
    parameters: param,
  });
};
