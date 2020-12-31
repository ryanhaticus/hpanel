// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import deleteuser from './deleteuser';
import sethomedir from './sethomedir';
import setpassword from './setpassword';
import setpermissions from './setpermissions';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'WebDisk',
        functionEP: ep
      });
    };
    
    export { deleteuser, sethomedir, setpassword, setpermissions,  };