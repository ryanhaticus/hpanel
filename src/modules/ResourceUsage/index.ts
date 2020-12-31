// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getusages from './getusages';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'ResourceUsage',
    functionEP: ep
  });
};

export { getusages };
