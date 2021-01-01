// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getsettings from './getsettings';
import listarchives from './listarchives';
import setsettings from './setsettings';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'LogManager',
    functionEP: ep,
  });
};

export { getsettings, listarchives, setsettings };
