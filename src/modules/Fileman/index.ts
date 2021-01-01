// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import autocompletedir from './autocompletedir';
import emptytrash from './emptytrash';
import getfilecontent from './getfilecontent';
import getfileinformation from './getfileinformation';
import listfiles from './listfiles';
import savefilecontent from './savefilecontent';
import transcode from './transcode';
import uploadfiles from './uploadfiles';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Fileman',
    functionEP: ep,
  });
};

export {
  autocompletedir,
  emptytrash,
  getfilecontent,
  getfileinformation,
  listfiles,
  savefilecontent,
  transcode,
  uploadfiles,
};
