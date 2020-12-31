// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import listaccounts from './listaccounts';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Resellers',
        functionEP: ep
      });
    };
    
    export { listaccounts,  };