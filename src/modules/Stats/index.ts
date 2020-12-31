// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getbandwidth from './getbandwidth';
import getsiteerrors from './getsiteerrors';
import listsites from './listsites';
import liststatsbydomain from './liststatsbydomain';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Stats',
        functionEP: ep
      });
    };
    
    export { getbandwidth, getsiteerrors, listsites, liststatsbydomain,  };