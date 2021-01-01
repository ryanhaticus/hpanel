// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getrequiredstrength from './getrequiredstrength';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'PasswdStrength',
    functionEP: ep,
  });
};

export { getrequiredstrength };
