// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import current from './current';
import list from './list';
import setdefault from './setdefault';
import update from './update';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Styles',
    functionEP: ep,
  });
};

export { current, list, setdefault, update };
