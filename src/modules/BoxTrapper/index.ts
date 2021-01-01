// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import blacklistmessages from './blacklistmessages';
import deletemessages from './deletemessages';
import delivermessages from './delivermessages';
import getconfiguration from './getconfiguration';
import getemailtemplate from './getemailtemplate';
import getforwarders from './getforwarders';
import getlog from './getlog';
import getmessage from './getmessage';
import getstatus from './getstatus';
import ignoremessages from './ignoremessages';
import listemailtemplates from './listemailtemplates';
import listqueuedmessages from './listqueuedmessages';
import processmessages from './processmessages';
import resetemailtemplate from './resetemailtemplate';
import saveconfiguration from './saveconfiguration';
import saveemailtemplate from './saveemailtemplate';
import setforwarders from './setforwarders';
import setstatus from './setstatus';
import whitelistmessages from './whitelistmessages';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'BoxTrapper',
    functionEP: ep,
  });
};

export {
  blacklistmessages,
  deletemessages,
  delivermessages,
  getconfiguration,
  getemailtemplate,
  getforwarders,
  getlog,
  getmessage,
  getstatus,
  ignoremessages,
  listemailtemplates,
  listqueuedmessages,
  processmessages,
  resetemailtemplate,
  saveconfiguration,
  saveemailtemplate,
  setforwarders,
  setstatus,
  whitelistmessages,
};
