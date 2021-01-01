// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import sendtestmessage from './sendtestmessage';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Pushbullet',
    functionEP: ep,
  });
};

export { sendtestmessage };
