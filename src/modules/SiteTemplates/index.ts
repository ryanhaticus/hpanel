// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import listsitetemplates from './listsitetemplates';
import listusersettings from './listusersettings';
import publish from './publish';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'SiteTemplates',
    functionEP: ep,
  });
};

export { listsitetemplates, listusersettings, publish };
