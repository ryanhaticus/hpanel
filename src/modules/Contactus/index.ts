// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import isenabled from './isenabled';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Contactus',
    functionEP: ep,
  });
};

export { isenabled };
