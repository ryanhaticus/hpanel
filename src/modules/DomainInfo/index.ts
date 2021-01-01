// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import domainsdata from './domainsdata';
import listdomains from './listdomains';
import maindomainbuiltinsubdomainaliases from './maindomainbuiltinsubdomainaliases';
import singledomaindata from './singledomaindata';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DomainInfo',
    functionEP: ep,
  });
};

export {
  domainsdata,
  listdomains,
  maindomainbuiltinsubdomainaliases,
  singledomaindata,
};
