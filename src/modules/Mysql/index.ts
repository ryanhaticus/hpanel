// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import addhost from './addhost';
import addhostnote from './addhostnote';
import checkdatabase from './checkdatabase';
import createdatabase from './createdatabase';
import createuser from './createuser';
import deletedatabase from './deletedatabase';
import deletehost from './deletehost';
import deleteuser from './deleteuser';
import dumpdatabaseschema from './dumpdatabaseschema';
import gethostnotes from './gethostnotes';
import getprivilegesondatabase from './getprivilegesondatabase';
import getrestrictions from './getrestrictions';
import getserverinformation from './getserverinformation';
import listdatabases from './listdatabases';
import listroutines from './listroutines';
import listusers from './listusers';
import locateserver from './locateserver';
import renamedatabase from './renamedatabase';
import renameuser from './renameuser';
import repairdatabase from './repairdatabase';
import revokeaccesstodatabase from './revokeaccesstodatabase';
import setpassword from './setpassword';
import setprivilegesondatabase from './setprivilegesondatabase';
import updateprivileges from './updateprivileges';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Mysql',
        functionEP: ep
      });
    };
    
    export { addhost, addhostnote, checkdatabase, createdatabase, createuser, deletedatabase, deletehost, deleteuser, dumpdatabaseschema, gethostnotes, getprivilegesondatabase, getrestrictions, getserverinformation, listdatabases, listroutines, listusers, locateserver, renamedatabase, renameuser, repairdatabase, revokeaccesstodatabase, setpassword, setprivilegesondatabase, updateprivileges,  };