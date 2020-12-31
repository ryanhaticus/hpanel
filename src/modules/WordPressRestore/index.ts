// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import anyrunning from './anyrunning';
import cleanup from './cleanup';
import start from './start';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'WordPressRestore',
        functionEP: ep
      });
    };
    
    export { anyrunning, cleanup, start,  };