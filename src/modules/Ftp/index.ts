// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import addftp from './addftp';
import allowsanonymousftp from './allowsanonymousftp';
import allowsanonymousftpincoming from './allowsanonymousftpincoming';
import deleteftp from './deleteftp';
import ftpexists from './ftpexists';
import getftpdaemoninfo from './getftpdaemoninfo';
import getport from './getport';
import getquota from './getquota';
import getwelcomemessage from './getwelcomemessage';
import killsession from './killsession';
import listftp from './listftp';
import listftpwithdisk from './listftpwithdisk';
import listsessions from './listsessions';
import passwd from './passwd';
import servername from './servername';
import setanonymousftp from './setanonymousftp';
import setanonymousftpincoming from './setanonymousftpincoming';
import sethomedir from './sethomedir';
import setquota from './setquota';
import setwelcomemessage from './setwelcomemessage';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Ftp',
    functionEP: ep,
  });
};

export {
  addftp,
  allowsanonymousftp,
  allowsanonymousftpincoming,
  deleteftp,
  ftpexists,
  getftpdaemoninfo,
  getport,
  getquota,
  getwelcomemessage,
  killsession,
  listftp,
  listftpwithdisk,
  listsessions,
  passwd,
  servername,
  setanonymousftp,
  setanonymousftpincoming,
  sethomedir,
  setquota,
  setwelcomemessage,
};
