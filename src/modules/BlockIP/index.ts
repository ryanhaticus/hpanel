// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import addip from './addip';
import removeip from './removeip';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'BlockIP',
    functionEP: ep
  });
};

export { addip, removeip };
