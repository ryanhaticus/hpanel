// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import disablealldomains from './disablealldomains';
import disabledomains from './disabledomains';
import enablealldomains from './enablealldomains';
import enabledomains from './enabledomains';
import hasmodsecurityinstalled from './hasmodsecurityinstalled';
import listdomains from './listdomains';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'ModSecurity',
        functionEP: ep
      });
    };
    
    export { disablealldomains, disabledomains, enablealldomains, enabledomains, hasmodsecurityinstalled, listdomains,  };