// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getserverinformation from './getserverinformation';
import getsessioninformation from './getsessioninformation';
import getuserinformation from './getuserinformation';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Variables',
    functionEP: ep,
  });
};

export { getserverinformation, getsessioninformation, getuserinformation };
