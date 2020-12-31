// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import read from './read';
import update from './update';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'CacheBuster',
    functionEP: ep
  });
};

export { read, update };
