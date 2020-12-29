// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import accountname from './accountname';
import addautoresponder from './addautoresponder';
import adddomainforwarder from './adddomainforwarder';
import addforwarder from './addforwarder';
import addlist from './addlist';
import addmailmandelegates from './addmailmandelegates';
import addmx from './addmx';
import addpop from './addpop';
import addspamfilter from './addspamfilter';
import browsemailbox from './browsemailbox';
import changemx from './changemx';
import checkfastmail from './checkfastmail';
import checkpipeforwarder from './checkpipeforwarder';
import countautoresponders from './countautoresponders';
import countfilters from './countfilters';
import countforwarders from './countforwarders';
import countlists from './countlists';
import countpops from './countpops';
import deleteautoresponder from './deleteautoresponder';
import deletedomainforwarder from './deletedomainforwarder';
import deletefilter from './deletefilter';
import deleteforwarder from './deleteforwarder';
import deleteheldmessages from './deleteheldmessages';
import deletelist from './deletelist';
import deletemx from './deletemx';
import deletepop from './deletepop';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Email',
    functionEP: ep
  });
};

export {
  accountname,
  addautoresponder,
  adddomainforwarder,
  addforwarder,
  addlist,
  addmailmandelegates,
  addmx,
  addpop,
  addspamfilter,
  browsemailbox,
  changemx,
  checkfastmail,
  checkpipeforwarder,
  countautoresponders,
  countfilters,
  countforwarders,
  countlists,
  countpops,
  deleteautoresponder,
  deletedomainforwarder,
  deletefilter,
  deleteforwarder,
  deleteheldmessages,
  deletelist,
  deletemx,
  deletepop
};
