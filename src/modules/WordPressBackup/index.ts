// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import anyrunning from './anyrunning';
import cancel from './cancel';
import cleanup from './cleanup';
import getavailablebackups from './getavailablebackups';
import isrunning from './isrunning';
import start from './start';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'WordPressBackup',
    functionEP: ep,
  });
};

export { anyrunning, cancel, cleanup, getavailablebackups, isrunning, start };
