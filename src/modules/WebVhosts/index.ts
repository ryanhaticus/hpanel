// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import listdomains from './listdomains';
import listsslcapabledomains from './listsslcapabledomains';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'WebVhosts',
    functionEP: ep
  });
};

export { listdomains, listsslcapabledomains };
