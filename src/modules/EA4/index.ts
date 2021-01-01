// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getrecommendations from './getrecommendations';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'EA4',
    functionEP: ep,
  });
};

export { getrecommendations };
