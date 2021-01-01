// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import addauthnlink from './addauthnlink';
import configuredmodules from './configuredmodules';
import getauthnlinks from './getauthnlinks';
import hasexternalauthmodulesconfigured from './hasexternalauthmodulesconfigured';
import removeauthnlink from './removeauthnlink';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'ExternalAuthentication',
    functionEP: ep,
  });
};

export {
  addauthnlink,
  configuredmodules,
  getauthnlinks,
  hasexternalauthmodulesconfigured,
  removeauthnlink,
};
