import { FunctionEP, mexecute } from '..';
import addpop from './addpop';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Email',
    functionEP: ep
  });
};

export { addpop };
