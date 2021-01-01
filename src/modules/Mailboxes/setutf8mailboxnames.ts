// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mailboxes%3A%3Aset_utf8_mailbox_names
export interface setUtf8MailboxNamesParameters {
  enabled: boolean;
}

import { execute } from './index';

export default (param: setUtf8MailboxNamesParameters) => {
  return execute({
    function: 'set_utf8_mailbox_names',
    parameters: param,
  });
};
