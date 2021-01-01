// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import create from './create';
import _delete from './delete';
import update from './update';
import verify from './verify';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'KnownHosts',
    functionEP: ep,
  });
};

export { create, _delete, update, verify };
