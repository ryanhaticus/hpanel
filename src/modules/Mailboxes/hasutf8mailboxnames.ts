// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mailboxes%3A%3Ahas_utf8_mailbox_names
export interface hasUtf8MailboxNamesParameters {
  user?: string;
}

import { execute } from './index';

export default (param?: hasUtf8MailboxNamesParameters) => {
  return execute({
    function: 'has_utf8_mailbox_names',
    parameters: param,
  });
};
