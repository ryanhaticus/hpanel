// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getindexing from './getindexing';
import listdirectories from './listdirectories';
import setindexing from './setindexing';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'DirectoryIndexes',
        functionEP: ep
      });
    };
    
    export { getindexing, listdirectories, setindexing,  };