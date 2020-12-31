// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import expungemailboxmessages from './expungemailboxmessages';
import expungemessagesformailboxguid from './expungemessagesformailboxguid';
import getmailboxstatuslist from './getmailboxstatuslist';
import hasutf8mailboxnames from './hasutf8mailboxnames';
import setutf8mailboxnames from './setutf8mailboxnames';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Mailboxes',
    functionEP: ep
  });
};

export {
  expungemailboxmessages,
  expungemessagesformailboxguid,
  getmailboxstatuslist,
  hasutf8mailboxnames,
  setutf8mailboxnames
};
