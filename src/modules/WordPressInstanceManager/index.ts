// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import cancelscan from './cancelscan';
import changeadminpassword from './changeadminpassword';
import cleanupscan from './cleanupscan';
import getapiversion from './getapiversion';
import getinstancebyid from './getinstancebyid';
import getinstances from './getinstances';
import getlatestwordpressversionfromwordpressorg from './getlatestwordpressversionfromwordpressorg';
import getscanresults from './getscanresults';
import isinstallableaddonavailable from './isinstallableaddonavailable';
import startscan from './startscan';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'WordPressInstanceManager',
    functionEP: ep,
  });
};

export {
  cancelscan,
  changeadminpassword,
  cleanupscan,
  getapiversion,
  getinstancebyid,
  getinstances,
  getlatestwordpressversionfromwordpressorg,
  getscanresults,
  isinstallableaddonavailable,
  startscan,
};
