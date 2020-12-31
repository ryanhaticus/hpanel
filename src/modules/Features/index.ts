// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getfeaturemetadata from './getfeaturemetadata';
import hasfeature from './hasfeature';
import listfeatures from './listfeatures';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Features',
        functionEP: ep
      });
    };
    
    export { getfeaturemetadata, hasfeature, listfeatures,  };