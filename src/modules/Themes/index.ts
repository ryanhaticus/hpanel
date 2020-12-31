// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getthemebase from './getthemebase';
import list from './list';
import update from './update';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Themes',
        functionEP: ep
      });
    };
    
    export { getthemebase, list, update,  };