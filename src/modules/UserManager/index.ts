// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import checkaccountconflicts from './checkaccountconflicts';
import deleteuser from './deleteuser';
import listusers from './listusers';
import lookupserviceaccount from './lookupserviceaccount';
import lookupuser from './lookupuser';
import unlinkserviceaccount from './unlinkserviceaccount';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'UserManager',
        functionEP: ep
      });
    };
    
    export { checkaccountconflicts, deleteuser, listusers, lookupserviceaccount, lookupuser, unlinkserviceaccount,  };