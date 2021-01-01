// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import adduser from './adduser';
import configuredirectoryprotection from './configuredirectoryprotection';
import deleteuser from './deleteuser';
import isdirectoryprotected from './isdirectoryprotected';
import listdirectories from './listdirectories';
import listusers from './listusers';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DirectoryPrivacy',
    functionEP: ep,
  });
};

export {
  adduser,
  configuredirectoryprotection,
  deleteuser,
  isdirectoryprotected,
  listdirectories,
  listusers,
};
