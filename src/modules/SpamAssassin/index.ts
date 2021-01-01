// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import clearspambox from './clearspambox';
import getsymbolictestnames from './getsymbolictestnames';
import getuserpreferences from './getuserpreferences';
import updateuserpreference from './updateuserpreference';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'SpamAssassin',
    functionEP: ep,
  });
};

export {
  clearspambox,
  getsymbolictestnames,
  getuserpreferences,
  updateuserpreference,
};
