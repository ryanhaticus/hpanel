// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mailboxes%3A%3Aexpunge_mailbox_messages
export interface expungeMailboxMessagesParameters {
  account: string;
  mailbox: string;
  query: string;
}

import { execute } from './index';

export default (param: expungeMailboxMessagesParameters) => {
  return execute({
    function: 'expunge_mailbox_messages',
    parameters: param,
  });
};
