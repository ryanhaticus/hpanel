// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import listdirectories from './listdirectories';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DirectoryProtection',
    functionEP: ep,
  });
};

export { listdirectories };
