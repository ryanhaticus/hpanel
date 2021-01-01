// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import strict from './strict';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Batch',
    functionEP: ep,
  });
};

export { strict };
