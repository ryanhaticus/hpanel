// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import disablealldomains from './disablealldomains';
import disabledomains from './disabledomains';
import enablealldomains from './enablealldomains';
import enabledomains from './enabledomains';
import hasgreylistingenabled from './hasgreylistingenabled';
import listdomains from './listdomains';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'cPGreyList',
    functionEP: ep,
  });
};

export {
  disablealldomains,
  disabledomains,
  enablealldomains,
  enabledomains,
  hasgreylistingenabled,
  listdomains,
};
