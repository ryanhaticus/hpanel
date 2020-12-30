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
import disablefilter from './disablefilter';
import disablemailboxautocreate from './disablemailboxautocreate';
import disablespamassasin from './disablespamassasin';
import disablespamautodelete from './disablespamautodelete';
import disablespambox from './disablespambox';
import dispatchclientsettings from './dispatchclientsettings';
import editpopquota from './editpopquota';
import enableautospamdelete from './enableautospamdelete';
import enablefilter from './enablefilter';
import enablemailboxautocreate from './enablemailboxautocreate';
import enablespamassassin from './enablespamassassin';
import enablespambox from './enablespambox';
import fetchcharmaps from './fetchcharmaps';
import ftsrescanmailbox from './ftsrescanmailbox';
import generatemailmanotp from './generatemailmanotp';
import getautoresponder from './getautoresponder';
import getcharsets from './getcharsets';
import getclientsettings from './getclientsettings';
import getdefaultemailquota from './getdefaultemailquota';
import getdefaultemailquotamib from './getdefaultemailquotamib';
import getdiskusage from './getdiskusage';
import getfilter from './getfilter';
import getheldmessagecount from './getheldmessagecount';
import getliststotaldiskusage from './getliststotaldiskusage';
import getmailboxautocreate from './getmailboxautocreate';
import getmailmandelegates from './getmailmandelegates';
import getmainaccountdiskusage from './getmainaccountdiskusage';
import getmainaccountdiskusagebytes from './getmainaccountdiskusagebytes';
import getmaxemailquota from './getmaxemailquota';
import getmaxemailquotamib from './getmaxemailquotamib';
import getpopquota from './getpopquota';
import getspamsettings from './getspamsettings';
import getwebmailsettings from './getwebmailsettings';
import hasdelegatedmailmanlists from './hasdelegatedmailmanlists';
import hasplaintextauthentication from './hasplaintextauthentication';
import holdoutgoing from './holdoutgoing';
import index from './index';
import isinteger from './isinteger';
import listautoresponders from './listautoresponders';
import listdefaultaddress from './listdefaultaddress';
import listdomainforwarders from './listdomainforwarders';
import listfilters from './listfilters';
import listfiltersbackups from './listfiltersbackups';
import listforwarders from './listforwarders';
import listforwardersbackups from './listforwardersbackups';
import listlists from './listlists';
import listmaildomains from './listmaildomains';
import listpops from './listpops';
import listpopswithdisk from './listpopswithdisk';
import listsystemfilterinfo from './listsystemfilterinfo';
import list_mxs from './listmxs';
import passwdlist from './passwdlist';
import passwdpop from './passwdpop';
import releaseoutgoing from './releaseoutgoing';
import removemailmandelegates from './removemailmandelegates';
import reorderfilters from './reorderfilters';
import setalwaysaccept from './setalwaysaccept';
import setdefaultaddress from './setdefaultaddress';
import setlistprivacyoptions from './setlistprivacyoptions';
import statsdbstatus from './statsdbstatus';
import storefilter from './storefilter';
import suspendincoming from './suspendincoming';
import suspendlogin from './suspendlogin';
import suspendoutgoing from './suspendoutgoing';
import tracedelivery from './tracedelivery';
import tracefilter from './tracefilter';
import unsuspendincoming from './unsuspendincoming';
import unsuspendlogin from './unsuspendlogin';
import unsuspendoutgoing from './unsuspendoutgoing';
import verifypassword from './verifypassword';

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
  deletepop,
  disablefilter,
  disablemailboxautocreate,
  disablespamassasin,
  disablespamautodelete,
  disablespambox,
  dispatchclientsettings,
  editpopquota,
  enableautospamdelete,
  enablefilter,
  enablemailboxautocreate,
  enablespamassassin,
  enablespambox,
  fetchcharmaps,
  ftsrescanmailbox,
  generatemailmanotp,
  getautoresponder,
  getcharsets,
  getclientsettings,
  getdefaultemailquota,
  getdefaultemailquotamib,
  getdiskusage,
  getfilter,
  getheldmessagecount,
  getliststotaldiskusage,
  getmailboxautocreate,
  getmailmandelegates,
  getmainaccountdiskusage,
  getmainaccountdiskusagebytes,
  getmaxemailquota,
  getmaxemailquotamib,
  getpopquota,
  getspamsettings,
  getwebmailsettings,
  hasdelegatedmailmanlists,
  hasplaintextauthentication,
  holdoutgoing,
  index,
  isinteger,
  listautoresponders,
  listdefaultaddress,
  listdomainforwarders,
  listfilters,
  listfiltersbackups,
  listforwarders,
  listforwardersbackups,
  listlists,
  listmaildomains,
  listpops,
  listpopswithdisk,
  listsystemfilterinfo,
  list_mxs,
  passwdlist,
  passwdpop,
  releaseoutgoing,
  removemailmandelegates,
  reorderfilters,
  setalwaysaccept,
  setdefaultaddress,
  setlistprivacyoptions,
  statsdbstatus,
  storefilter,
  suspendincoming,
  suspendlogin,
  suspendoutgoing,
  tracedelivery,
  tracefilter,
  unsuspendincoming,
  unsuspendlogin,
  unsuspendoutgoing,
  verifypassword
};
