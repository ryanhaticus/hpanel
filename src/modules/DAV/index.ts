// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import disablesharedglobaladdressbook from './disablesharedglobaladdressbook';
import enablesharedglobaladdressbook from './enablesharedglobaladdressbook';
import getcalendarcontactsconfig from './getcalendarcontactsconfig';
import hassharedglobaladdressbook from './hassharedglobaladdressbook';
import isdavserviceenabled from './isdavserviceenabled';
import ishordeenabled from './ishordeenabled';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DAV',
    functionEP: ep,
  });
};

export {
  disablesharedglobaladdressbook,
  enablesharedglobaladdressbook,
  getcalendarcontactsconfig,
  hassharedglobaladdressbook,
  isdavserviceenabled,
  ishordeenabled,
};
