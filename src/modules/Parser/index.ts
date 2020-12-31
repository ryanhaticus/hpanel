// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import firstfilerelativeuri from './firstfilerelativeuri';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Parser',
    functionEP: ep
  });
};

export { firstfilerelativeuri };
