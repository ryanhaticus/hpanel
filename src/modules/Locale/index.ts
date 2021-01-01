// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getattributes from './getattributes';
import listlocales from './listlocales';
import setlocale from './setlocale';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Locale',
    functionEP: ep,
  });
};

export { getattributes, listlocales, setlocale };
