// Import types and execute method from module.
import { FunctionEP, mexecute } from '..';

// Import Functions
import getenabledprotocols from './getenabledprotocols';
import getretentionperiods from './getretentionperiods';
import query from './query';

export const execute = (ep: FunctionEP) => {
  return mexecute({
    module: 'Bandwidth',
    functionEP: ep
  });
};

export { getenabledprotocols, getretentionperiods, query };
