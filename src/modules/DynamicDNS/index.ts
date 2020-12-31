// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import create from './create';
import delete from './delete';
import list from './list';
import recreate from './recreate';
import setdescription from './setdescription';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'DynamicDNS',
        functionEP: ep
      });
    };
    
    export { create, delete, list, recreate, setdescription,  };