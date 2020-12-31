// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import generateuserconfiguration from './generateuserconfiguration';
import getuserconfiguration from './getuserconfiguration';
import removeuserconfiguration from './removeuserconfiguration';
import setuserconfiguration from './setuserconfiguration';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'TwoFactorAuth',
        functionEP: ep
      });
    };
    
    export { generateuserconfiguration, getuserconfiguration, removeuserconfiguration, setuserconfiguration,  };