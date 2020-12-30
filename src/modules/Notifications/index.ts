// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Notifications',
    functionEP: ep
  });
};

export {};