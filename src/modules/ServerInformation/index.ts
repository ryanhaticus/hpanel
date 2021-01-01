// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getinformation from './getinformation';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'ServerInformation',
    functionEP: ep,
  });
};

export { getinformation };
