// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Session%3A%3Acreate_webmail_session_for_self
export interface createWebmailSessionForSelfParameters {
  locale: number;
  remote_address: number;
}

import { execute } from './index';

export default (param: createWebmailSessionForSelfParameters) => {
  return execute({
    function: 'create_webmail_session_for_self',
    parameters: param
  });
};
