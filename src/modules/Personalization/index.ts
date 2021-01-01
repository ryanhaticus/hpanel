// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import get from './get';
import set from './set';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Personalization',
    functionEP: ep,
  });
};

export { get, set };
