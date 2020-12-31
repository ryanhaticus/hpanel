// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getconfiguration from './getconfiguration';
import saveconfiguration from './saveconfiguration';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'StatsManager',
        functionEP: ep
      });
    };
    
    export { getconfiguration, saveconfiguration,  };