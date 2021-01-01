// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import createdatabase from './createdatabase';
import createuser from './createuser';
import deletedatabase from './deletedatabase';
import deleteuser from './deleteuser';
import getrestrictions from './getrestrictions';
import grantallprivileges from './grantallprivileges';
import listdatabases from './listdatabases';
import listusers from './listusers';
import renamedatabase from './renamedatabase';
import renameuser from './renameuser';
import renameusernopassword from './renameusernopassword';
import revokeallprivileges from './revokeallprivileges';
import setpassword from './setpassword';
import updateprivileges from './updateprivileges';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Postgresql',
    functionEP: ep,
  });
};

export {
  createdatabase,
  createuser,
  deletedatabase,
  deleteuser,
  getrestrictions,
  grantallprivileges,
  listdatabases,
  listusers,
  renamedatabase,
  renameuser,
  renameusernopassword,
  revokeallprivileges,
  setpassword,
  updateprivileges,
};
