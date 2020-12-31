// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import addhandler from './addhandler';
import addhotlink from './addhotlink';
import addmime from './addmime';
import addredirect from './addredirect';
import deletehandler from './deletehandler';
import deletehotlink from './deletehotlink';
import deletemime from './deletemime';
import deleteredirect from './deleteredirect';
import getredirect from './getredirect';
import listhandlers from './listhandlers';
import listhotlinks from './listhotlinks';
import listmime from './listmime';
import listredirects from './listredirects';
import redirectinfo from './redirectinfo';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Mime',
        functionEP: ep
      });
    };
    
    export { addhandler, addhotlink, addmime, addredirect, deletehandler, deletehotlink, deletemime, deleteredirect, getredirect, listhandlers, listhotlinks, listmime, listredirects, redirectinfo,  };