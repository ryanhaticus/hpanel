// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import createfullaccess from './createfullaccess';
import list from './list';
import rename from './rename';
import revoke from './revoke';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Tokens',
    functionEP: ep
  });
};

export { createfullaccess, list, rename, revoke };
