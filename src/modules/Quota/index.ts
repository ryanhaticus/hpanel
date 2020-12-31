// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getlocalquotainfo from './getlocalquotainfo';
import getquotainfo from './getquotainfo';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Quota',
        functionEP: ep
      });
    };
    
    export { getlocalquotainfo, getquotainfo,  };