// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getport from './getport';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'SSH',
    functionEP: ep
  });
};

export { getport };
