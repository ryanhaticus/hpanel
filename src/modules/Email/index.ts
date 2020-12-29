import { FunctionEP, mexecute, FunctionResponse, FunctionCallback } from '..';
import addpop from './addpop';

export const execute = (ep: FunctionEP, callback: FunctionCallback) => {
  mexecute(
    {
      module: 'Email',
      functionEP: ep
    },
    (functionResponse: FunctionResponse) => {
      callback(functionResponse);
    }
  );
};

export { addpop };
