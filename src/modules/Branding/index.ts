// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import file from './file';
import getapplications from './getapplications';
import getapplicationinformation from './getapplicationinformation';
import getavailableapplications from './getavailableapplications';
import getinformationforapplications from './getinformationforapplications';
import image from './image';
import include from './include';
import spritelist from './spritelist';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Branding',
    functionEP: ep
  });
};

export {
  file,
  getapplications,
  getapplicationinformation,
  getavailableapplications,
  getinformationforapplications,
  image,
  include,
  spritelist
};
