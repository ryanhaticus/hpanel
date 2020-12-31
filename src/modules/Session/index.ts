// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import createtempuser from './createtempuser';
import createwebmailsessionformailuser from './createwebmailsessionformailuser';
import createwebmailsessionformailusercheckpassword from './createwebmailsessionformailusercheckpassword';
import createwebmailsessionforself from './createwebmailsessionforself';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Session',
        functionEP: ep
      });
    };
    
    export { createtempuser, createwebmailsessionformailuser, createwebmailsessionformailusercheckpassword, createwebmailsessionforself,  };