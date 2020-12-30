// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import fullbackuptoftp from './fullbackuptoftp';
import fullbackuptohomedir from './fullbackuptohomedir';
import fullbackuptoscpwithkey from './fullbackuptoscpwithkey';
import fullbackuptoscpwithpassword from './fullbackuptoscpwithpassword';
import listbackusp from './listbackups';
import restoredatabases from './restoredatabases';
import restoreemailfilters from './restoreemailfilters';
import restoreemailforwarders from './restoreemailforwarders';
import restorefiles from './restorefiles';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Backup',
    functionEP: ep
  });
};

export {
  fullbackuptoftp,
  fullbackuptohomedir,
  fullbackuptoscpwithkey,
  fullbackuptoscpwithpassword,
  listbackusp,
  restoredatabases,
  restoreemailforwarders,
  restorefiles,
  restoreemailfilters
};
