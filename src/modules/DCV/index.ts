// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import checkdomainsviadns from './checkdomainsviadns';
import checkdomainsviahttp from './checkdomainsviahttp';
import ensuredomainscanpassdcv from './ensuredomainscanpassdcv';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DCV',
    functionEP: ep
  });
};

export { checkdomainsviadns, checkdomainsviahttp, ensuredomainscanpassdcv };
