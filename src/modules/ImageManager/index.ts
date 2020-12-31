// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import convertfile from './convertfile';
import createthumbnails from './createthumbnails';
import getdimensions from './getdimensions';
import resizeimage from './resizeimage';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'ImageManager',
    functionEP: ep
  });
};

export { convertfile, createthumbnails, getdimensions, resizeimage };
