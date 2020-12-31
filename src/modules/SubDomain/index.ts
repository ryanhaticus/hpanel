// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import addsubdomain from './addsubdomain';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'SubDomain',
        functionEP: ep
      });
    };
    
    export { addsubdomain,  };