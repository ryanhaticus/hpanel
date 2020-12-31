// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import adddelegate from './adddelegate';
import listdelegates from './listdelegates';
import listusers from './listusers';
import removedelegate from './removedelegate';
import updatedelegate from './updatedelegate';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'CCS',
        functionEP: ep
      });
    };
    
    export { adddelegate, listdelegates, listusers, removedelegate, updatedelegate,  };