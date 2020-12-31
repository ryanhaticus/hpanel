// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import listwebmailapps from './listwebmailapps';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'WebmailApps',
        functionEP: ep
      });
    };
    
    export { listwebmailapps,  };