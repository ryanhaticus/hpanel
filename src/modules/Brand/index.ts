// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import read from './read';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Brand',
    functionEP: ep,
  });
};

export { read };
