// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import fetchurl from './fetchurl';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Integration',
        functionEP: ep
      });
    };
    
    export { fetchurl,  };