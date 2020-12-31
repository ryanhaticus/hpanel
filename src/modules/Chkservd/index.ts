// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import geteximports from './geteximports';
import geteximportsssl from './geteximportsssl';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Chkservd',
        functionEP: ep
      });
    };
    
    export { geteximports, geteximportsssl,  };