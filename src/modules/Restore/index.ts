// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import directorylisting from './directorylisting';
import getusers from './getusers';
import queryfileinfo from './queryfileinfo';
import restorefile from './restorefile';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Restore',
        functionEP: ep
      });
    };
    
    export { directorylisting, getusers, queryfileinfo, restorefile,  };