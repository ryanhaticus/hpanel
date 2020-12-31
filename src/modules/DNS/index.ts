// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import ensuredomainsresideonlylocally from './ensuredomainsresideonlylocally';
import haslocalauthority from './haslocalauthority';
import lookup from './lookup';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'DNS',
        functionEP: ep
      });
    };
    
    export { ensuredomainsresideonlylocally, haslocalauthority, lookup,  };