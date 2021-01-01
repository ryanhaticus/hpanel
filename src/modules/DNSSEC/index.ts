// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import activatezonekey from './activatezonekey';
import addzonekey from './addzonekey';
import deactivatezonekey from './deactivatezonekey';
import disablednssec from './disablednssec';
import enablednssec from './enablednssec';
import exportzonednskey from './exportzonednskey';
import exportzonekey from './exportzonekey';
import fetchdsrecords from './fetchdsrecords';
import importzonekey from './importzonekey';
import removezonekey from './removezonekey';
import setnsec3 from './setnsec3';
import unsetnsec3 from './unsetnsec3';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'DNSSEC',
    functionEP: ep,
  });
};

export {
  activatezonekey,
  addzonekey,
  deactivatezonekey,
  disablednssec,
  enablednssec,
  exportzonednskey,
  exportzonekey,
  fetchdsrecords,
  importzonekey,
  removezonekey,
  setnsec3,
  unsetnsec3,
};
