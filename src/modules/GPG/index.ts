// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import deletekeypair from './deletekeypair';
import exportpublickey from './exportpublickey';
import exportsecretkey from './exportsecretkey';
import generatekey from './generatekey';
import importkey from './importkey';
import listpublickeys from './listpublickeys';
import listsecretkeys from './listsecretkeys';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'GPG',
    functionEP: ep
  });
};

export {
  deletekeypair,
  exportpublickey,
  exportsecretkey,
  generatekey,
  importkey,
  listpublickeys,
  listsecretkeys
};
