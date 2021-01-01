// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mailboxes%3A%3Aget_mailbox_status_list
export interface getMailboxStatusListParameters {
  account: string;
}

import { execute } from './index';

export default (param: getMailboxStatusListParameters) => {
  return execute({
    function: 'get_mailbox_status_list',
    parameters: param,
  });
};
