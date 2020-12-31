// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import delete from './delete';
import retrieve from './retrieve';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'UserTasks',
        functionEP: ep
      });
    };
    
    export { delete, retrieve,  };