// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getdom from './getdom';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Chrome',
    functionEP: ep
  });
};

export { getdom };
