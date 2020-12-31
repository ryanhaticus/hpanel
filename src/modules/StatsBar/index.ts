// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getstats from './getstats';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'StatsBar',
    functionEP: ep
  });
};

export { getstats };
