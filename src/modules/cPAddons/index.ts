// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import getavailableaddons from './getavailableaddons';
import getinstancesettings from './getinstancesettings';
import listaddoninstances from './listaddoninstances';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'cPAddons',
        functionEP: ep
      });
    };
    
    export { getavailableaddons, getinstancesettings, listaddoninstances,  };