// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import disabledkim from './disabledkim';
import enabledkim from './enabledkim';
import ensuredkimkeysexist from './ensuredkimkeysexist';
import fetchdkimprivatekeys from './fetchdkimprivatekeys';
import installdkimprivatekeys from './installdkimprivatekeys';
import installspfrecords from './installspfrecords';
import validatecurrentdkims from './validatecurrentdkims';
import validatecurrentptrs from './validatecurrentptrs';
import validatecurrentspfs from './validatecurrentspfs';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'EmailAuth',
        functionEP: ep
      });
    };
    
    export { disabledkim, enabledkim, ensuredkimkeysexist, fetchdkimprivatekeys, installdkimprivatekeys, installspfrecords, validatecurrentdkims, validatecurrentptrs, validatecurrentspfs,  };