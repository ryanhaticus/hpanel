// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import disableapplication from './disableapplication';
import editapplication from './editapplication';
import enableapplication from './enableapplication';
import ensuredeps from './ensuredeps';
import listapplications from './listapplications';
import registerapplication from './registerapplication';
import unregisterapplication from './unregisterapplication';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'PassengerApps',
    functionEP: ep
  });
};

export {
  disableapplication,
  editapplication,
  enableapplication,
  ensuredeps,
  listapplications,
  registerapplication,
  unregisterapplication
};
