// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import phpgetdomainhandler from './phpgetdomainhandler';
import phpgetimpacteddomains from './phpgetimpacteddomains';
import phpgetinstalledversions from './phpgetinstalledversions';
import phpgetsystemdefaultversion from './phpgetsystemdefaultversion';
import phpgetvhostversions from './phpgetvhostversions';
import phpinigetuserbasicdirectives from './phpinigetuserbasicdirectives';
import phpinigetusercontent from './phpinigetusercontent';
import phpinigetuserpaths from './phpinigetuserpaths';
import phpinisetuserbasicdirectives from './phpinisetuserbasicdirectives';
import phpinisetusercontent from './phpinisetusercontent';
import phpsetvhostversions from './phpsetvhostversions';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'LangPHP',
    functionEP: ep,
  });
};

export {
  phpgetdomainhandler,
  phpgetimpacteddomains,
  phpgetinstalledversions,
  phpgetsystemdefaultversion,
  phpgetvhostversions,
  phpinigetuserbasicdirectives,
  phpinigetusercontent,
  phpinigetuserpaths,
  phpinisetuserbasicdirectives,
  phpinisetusercontent,
  phpsetvhostversions,
};
