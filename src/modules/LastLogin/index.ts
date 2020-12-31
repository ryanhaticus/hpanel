// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getlastorcurrentloggedinip from './getlastorcurrentloggedinip';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'LastLogin',
        functionEP: ep
      });
    };
    
    export { getlastorcurrentloggedinip,  };