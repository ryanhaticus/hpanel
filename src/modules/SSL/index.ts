// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import addautosslexcludeddomains from './addautosslexcludeddomains';
import cansslredirect from './cansslredirect';
import checksharedcert from './checksharedcert';
import deletecert from './deletecert';
import deletecsr from './deletecsr';
import deletekey from './deletekey';
import deletessl from './deletessl';
import disablemailsni from './disablemailsni';
import enablemailsni from './enablemailsni';
import fetchbestfordomain from './fetchbestfordomain';
import fetchcertificatesforfqdns from './fetchcertificatesforfqdns';
import fetchcertinfo from './fetchcertinfo';
import fetchkeyandcabundleforcertificate from './fetchkeyandcabundleforcertificate';
import findcertificatesforkey from './findcertificatesforkey';
import findcsrsforkey from './findcsrsforkey';
import generatecert from './generatecert';
import generatecsr from './generatecsr';
import generatekey from './generatekey';
import getautosslexcludeddomains from './getautosslexcludeddomains';
import getautosslpendingqueue from './getautosslpendingqueue';
import getautosslproblems from './getautosslproblems';
import getcabundle from './getcabundle';
import getcnname from './getcnname';
import installedhost from './installedhost';
import installedhosts from './installedhosts';
import installssl from './installssl';
import isautosslcheckinprogress from './isautosslcheckinprogress';
import ismailsnisupported from './ismailsnisupported';
import issnisupported from './issnisupported';
import listcerts from './listcerts';
import listcsrs from './listcsrs';
import listkeys from './listkeys';
import listsslitems from './listsslitems';
import mailsnistatus from './mailsnistatus';
import rebuildmailsniconfig from './rebuildmailsniconfig';
import rebuildssldb from './rebuildssldb';
import removeautosslexcludeddomains from './removeautosslexcludeddomains';
import setautosslexcludeddomains from './setautosslexcludeddomains';
import setcertfriendlyname from './setcertfriendlyname';
import setcsrfriendlyname from './setcsrfriendlyname';
import setdefaultkeytype from './setdefaultkeytype';
import setkeyfriendlyname from './setkeyfriendlyname';
import setprimaryssl from './setprimaryssl';
import setsslshare from './setsslshare';
import showcert from './showcert';
import showcsr from './showcsr';
import showkey from './showkey';
import startautosslcheck from './startautosslcheck';
import togglesslredirectfordomains from './togglesslredirectfordomains';
import uploadcert from './uploadcert';
import uploadkey from './uploadkey';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'SSL',
    functionEP: ep,
  });
};

export {
  addautosslexcludeddomains,
  cansslredirect,
  checksharedcert,
  deletecert,
  deletecsr,
  deletekey,
  deletessl,
  disablemailsni,
  enablemailsni,
  fetchbestfordomain,
  fetchcertificatesforfqdns,
  fetchcertinfo,
  fetchkeyandcabundleforcertificate,
  findcertificatesforkey,
  findcsrsforkey,
  generatecert,
  generatecsr,
  generatekey,
  getautosslexcludeddomains,
  getautosslpendingqueue,
  getautosslproblems,
  getcabundle,
  getcnname,
  installedhost,
  installedhosts,
  installssl,
  isautosslcheckinprogress,
  ismailsnisupported,
  issnisupported,
  listcerts,
  listcsrs,
  listkeys,
  listsslitems,
  mailsnistatus,
  rebuildmailsniconfig,
  rebuildssldb,
  removeautosslexcludeddomains,
  setautosslexcludeddomains,
  setcertfriendlyname,
  setcsrfriendlyname,
  setdefaultkeytype,
  setkeyfriendlyname,
  setprimaryssl,
  setsslshare,
  showcert,
  showcsr,
  showkey,
  startautosslcheck,
  togglesslredirectfordomains,
  uploadcert,
  uploadkey,
};
